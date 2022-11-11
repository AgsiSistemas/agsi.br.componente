import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { ConteinerItem } from "../Conteiner/Conteiner"
import CustomInputSelect from "../Inputs/CustomInputSelect/CustomInputSelect"
import { maskWallet } from "../../Assets/Enum/Patterns.js";
import { handleLoading, isNullValue } from "./Utils.js";
import './CustomBeneficiarieFields.scss'

const ResponseModel = {
  "timestamp": "",
  "status": 0,
  "message": "",
  "data": []
}

const ResponseModel_v2 = {
  "timestamp": "",
  "status": 0,
  "message": "",
  "data": {
    "content": []
  }
}

const CustomBeneficiarieFields = ({ valueId, onChangeId, valueName, onChangeName, validation, api, disabled }) => {

  // LocalState
  const [loadingBeneficiary, setLoadingBeneficiary] = useState(false)
  const [openBeneficiariesField, setOpenBeneficiariesField] = React.useState(false);
  const [openWalletField, setOpenWalletField] = React.useState(false);
  const [localBeneficiaries, setLocalBeneficiaries] = useState(ResponseModel_v2)
  const [localBeneficiariesWallets, setLocalBeneficiariesWallets] = useState(ResponseModel)

  const [beneficiarieWalletValue, setBeneficiarieWalletValue] = useState(valueId)
  const [beneficiarieWalletInputValue, setBeneficiarieWalletInputValue] = useState('')
  const [beneficiariesNameInputValue, setBeneficiariesNameInputValue] = useState('')
  const [beneficiariesNameValue, setBeneficiariesNameValue] = useState(valueName)

  useEffect(() => {
    onChangeId(beneficiarieWalletValue)
    onChangeName(beneficiariesNameValue)
  }, [beneficiarieWalletValue, beneficiariesNameValue])

  useEffect(() => {
    console.log(localBeneficiariesWallets.data)
  }, [localBeneficiariesWallets])

  return (
    <>
      <ConteinerItem className="custom-beneficiarie-component-wallet">
        <CustomInputSelect
          title={handleLoading("Carteirinha *", loadingBeneficiary)}
          freeSolo
          open={openWalletField}
          options={localBeneficiaries.data.content.map((item, index) => ({
            label: `${item.code}`,
            name: `${item.name}`,
            id: index
          }))}
          disabled={disabled}
          value={beneficiarieWalletValue}
          onChange={(event, newInputValue) => {
            console.log(newInputValue);
            setBeneficiarieWalletValue(newInputValue)
            if (isNullValue(newInputValue)) setBeneficiariesNameValue('')
            if (newInputValue !== null && newInputValue.name) {
              setBeneficiariesNameValue({ label: newInputValue.name, id: newInputValue.id })
            }
            setOpenWalletField(false)
          }}
          inputValue={beneficiarieWalletInputValue}
          onInputChange={(event, newInputValue) => { setBeneficiarieWalletInputValue(maskWallet(newInputValue)) }}
          onKeyUp={async (event) => {
            try {
              if (event.key === 'Tab' || event.target.value.length > 15) {
                setLoadingBeneficiary(true)
                let response = await api.http.get(`${api.addressCode(event.target.value)}`)
                if (!isNullValue(response.data.data.code)) {

                  setLocalBeneficiaries({ data: { content: [response.data.data] } })
                  setOpenWalletField(true)
                }
                setLoadingBeneficiary(false)
              }
            } catch {
              setLoadingBeneficiary(false)
            }
          }}
          onblur={() => setOpenWalletField(false)}
          maxLength={18}
          validation={validation}
        />
      </ConteinerItem>
      <ConteinerItem>
        <CustomInputSelect
          title={handleLoading("Nome Beneficiario *", loadingBeneficiary)}
          freeSolo
          open={openBeneficiariesField}
          options={localBeneficiaries.data.content.map((item, index) => ({
            label: `${item.name}`,
            id: index
          }))}
          disabled={disabled}
          value={beneficiariesNameValue}
          onChange={(event, newValue) => setBeneficiariesNameValue(newValue)}
          inputValue={beneficiariesNameInputValue}
          onInputChange={(event, newInputValue) => {

            setBeneficiariesNameInputValue(newInputValue)
            if (newInputValue == '') {
              setBeneficiarieWalletValue('')
            }
            let item = localBeneficiaries.data.content.filter(x => x.name === newInputValue)[0]
            if (!isNullValue(item)) {
              setBeneficiarieWalletValue(item.code)
              setOpenBeneficiariesField(false)
            }

          }}
          onKeyDown={async (event) => {
            try {
              if (event.key === 'Enter' || event.key === 'Tab' || event.target.value.length > 1) {
                setLoadingBeneficiary(true)
                let response = await api.http.get(`${api.addressName(beneficiariesNameInputValue)}`)
                setLocalBeneficiaries(response.data)
                setLoadingBeneficiary(false)
                setOpenBeneficiariesField(true)
              }
            } catch {
              setLoadingBeneficiary(false)
            }
          }}
          onBlur={() => setOpenBeneficiariesField(false)}
          validation={validation}
        />
      </ConteinerItem>
    </>
  )

}

CustomBeneficiarieFields.propTypes = {
  valueId: PropTypes.object.isRequired,
  valueName: PropTypes.object,
  onChangeId: PropTypes.func,
  onChangeName: PropTypes.func,
  validation: PropTypes.string,
  api: PropTypes.object,
  api: PropTypes.shape({
    addressCode: PropTypes.object,
    addressName: PropTypes.object,
    http: PropTypes.string
  }),
  disabled: PropTypes.bool,
};

CustomBeneficiarieFields.defaultProp = {
  valueId: {},
  valueName: {},
  onChangeId: () => { },
  onChangeName: () => { },
  validation: '',
  api: { addressName: () => { } },
  disabled: false
};

export default CustomBeneficiarieFields