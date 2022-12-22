import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { ConteinerItem } from "../Conteiner/Conteiner"
import CustomInputSelect from "../Inputs/CustomInputSelect/CustomInputSelect"
import { maskWallet } from "../../Assets/Enum/Patterns.js";
import { handleLoading, isNullValue } from "../../Utils/Utils.js";
import './CustomBeneficiarieFields.scss'


const CustomBeneficiarieFields = ({ label, valueId, onChangeId, valueName, onChangeName, validation, api, disabled, required }) => {

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
  // LocalState
  const [loadingBeneficiary, setLoadingBeneficiary] = useState(false)
  const [openBeneficiariesField, setOpenBeneficiariesField] = React.useState(false);
  const [openWalletField, setOpenWalletField] = React.useState(false);
  const [localBeneficiaries, setLocalBeneficiaries] = useState(ResponseModel_v2)
  const [beneficiarieWalletInputValue, setBeneficiarieWalletInputValue] = useState('')
  const [beneficiariesNameInputValue, setBeneficiariesNameInputValue] = useState('')

  const isRequired = () => {
    if (required) return ' *'
    else {
      return ''
    }
  }

  return (
    <Fragment>
      <ConteinerItem className="custom-beneficiarie-component-wallet">
        <CustomInputSelect
          title={handleLoading((!label ? "Carteirinha" : label[0]) + isRequired(), loadingBeneficiary)}
          freeSolo
          open={openWalletField}
          options={localBeneficiaries.data.content.map((item, index) => ({
            label: `${item.code}`,
            name: `${item.name}`,
            id: index
          }))}
          disabled={disabled}
          value={valueId}
          onChange={(event, newInputValue) => {
            onChangeId(newInputValue)
            if (isNullValue(newInputValue)) onChangeName('')
            if (newInputValue !== null && newInputValue.name) {
              onChangeName({ label: newInputValue.name, id: newInputValue.id })
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
          title={handleLoading((!label ? "Nome Beneficiário" : label[1]) + isRequired(), loadingBeneficiary)}
          freeSolo
          open={openBeneficiariesField}
          options={localBeneficiaries.data.content.map((item, index) => ({
            label: `${item.name}`,
            id: index
          }))}
          disabled={disabled}
          value={valueName}
          onChange={(event, newValue) => onChangeName(newValue)}
          inputValue={beneficiariesNameInputValue}
          onInputChange={(event, newInputValue) => {

            setBeneficiariesNameInputValue(newInputValue)
            if (newInputValue == '') {
              onChangeId('')
            }
            let item = localBeneficiaries.data.content.filter(x => x.name === newInputValue)[0]
            if (!isNullValue(item)) {
              onChangeId(item.code)
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
    </Fragment>
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
    addressCode: PropTypes.func,
    addressName: PropTypes.object,
    http: PropTypes.string
  }),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

CustomBeneficiarieFields.defaultProp = {
  valueId: {},
  valueName: {},
  onChangeId: () => { },
  onChangeName: () => { },
  validation: '',
  api: {
    addressCode: () => { },
    addressName: () => { }
  },
  disabled: false,
  required: false,
};

export default CustomBeneficiarieFields