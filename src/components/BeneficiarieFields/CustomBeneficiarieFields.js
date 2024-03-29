import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ConteinerItem } from '../Conteiner/Conteiner'
import CustomInputSelect from '../Inputs/CustomInputSelect/CustomInputSelect'
import { maskText, maskWallet } from '../../Assets/Enum/Patterns.js'
import { handleLoading, isNullValue } from '../../Utils/Utils.js'
import './CustomBeneficiarieFields.scss'

const CustomBeneficiarieFields = ({
  label,
  valueId,
  onChangeId,
  onChangeData,
  valueName,
  onChangeName,
  validation,
  api,
  disabled,
  required
}) => {
  const ResponseModel = {
    timestamp: '',
    status: 0,
    message: '',
    data: []
  }

  const ResponseModel_v2 = {
    timestamp: '',
    status: 0,
    message: '',
    data: {
      content: []
    }
  }
  // LocalState
  const [loadingBeneficiary, setLoadingBeneficiary] = useState(false)
  const [openBeneficiariesField, setOpenBeneficiariesField] =
    React.useState(false)
  const [openWalletField, setOpenWalletField] = React.useState(false)
  const [localBeneficiaries, setLocalBeneficiaries] = useState(ResponseModel_v2)
  const [beneficiarieWalletInputValue, setBeneficiarieWalletInputValue] =
    useState('')
  const [beneficiariesNameInputValue, setBeneficiariesNameInputValue] =
    useState('')

  const isRequired = () => {
    if (required) return ' *'
    else {
      return ''
    }
  }

  const handleOnChangeData = (e) => {
    if (onChangeData) {
      onChangeData(e)
    }
  }

  return (
    <div className='custom-beneficiarie-field-content'>
      <ConteinerItem className='custom-beneficiarie-component-wallet'>
        <CustomInputSelect
          title={handleLoading(
            (!label ? 'Carteirinha' : label[0]) + isRequired(),
            loadingBeneficiary
          )}
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
            onChangeId(newInputValue.label)
            if (isNullValue(newInputValue)) onChangeName('')
            if (newInputValue !== null && newInputValue.name) {
              onChangeName({ label: newInputValue.name, id: newInputValue.id })
            }
            setOpenWalletField(false)
          }}
          inputValue={beneficiarieWalletInputValue}
          onInputChange={(event, newInputValue) => {
            if (newInputValue == '') {
              onChangeName('')
              // handleOnChangeData('')
            }
            setBeneficiarieWalletInputValue(maskWallet(newInputValue))
          }}
          onKeyUp={async (event) => {
            try {
              if (event.key === 'Tab' || event.target.value.length > 15) {
                setLoadingBeneficiary(true)
                let response = await api.http.get(
                  `${api.addressCode(event.target.value)}`
                )

                if (!isNullValue(response.data.data.code)) {
                  setLocalBeneficiaries({
                    data: { content: [response.data.data] }
                  })
                  setOpenWalletField(true)
                }
                setLoadingBeneficiary(false)
              }
            } catch {
              setLoadingBeneficiary(false)
            }
          }}
          onBlur={async (event) => {
            try {
              setLoadingBeneficiary(true)
              let response = await api.http.get(
                `${api.addressCode(event.target.value)}`
              )
              if (response.data.data?.name) {
                onChangeId(response.data.data?.code)
                onChangeName({ label: response.data.data?.name, id: response.data.data?.code })
              }
              setOpenWalletField(false)
              setLoadingBeneficiary(false)
              // }
            } catch {
              setOpenWalletField(false)
              setLoadingBeneficiary(false)
            }
          }
          }
          maxLength={18}
          validation={validation}
        />
      </ConteinerItem>
      <ConteinerItem className='custom-beneficiarie-field-name'>
        <CustomInputSelect
          title={handleLoading(
            (!label ? 'Nome Beneficiário' : label[1]) + isRequired(),
            loadingBeneficiary
          )}
          freeSolo
          open={openBeneficiariesField}
          options={localBeneficiaries.data.content.map((item, index) => ({
            label: `${item.name}`,
            id: index
          }))}
          disabled={disabled}
          value={valueName}
          onChange={(event, newValue) => {
            onChangeName(newValue)
          }}
          inputValue={beneficiariesNameInputValue}
          onInputChange={async (event, newInputValue) => {
            if (newInputValue == '') {
              onChangeId('')
              handleOnChangeData('')
            }
            setBeneficiariesNameInputValue(maskText(newInputValue))

            if (newInputValue && event.target.value.length >= 3) {
              setLoadingBeneficiary(true)
              await api.http.get(
                `${api.addressName(maskText(event.target.value))}`
              ).then((response) => {
                setLocalBeneficiaries(response.data)
              })
              setLoadingBeneficiary(false)
              setOpenBeneficiariesField(true)
            }

            let item = localBeneficiaries.data.content.filter(
              (x) => x.name === newInputValue
            )[0]

            if (!isNullValue(item)) {
              onChangeId(item.code)
              handleOnChangeData(item)
              setOpenBeneficiariesField(false)
            } else {
            }
          }}
          // onKeyDown={async (event) => {
          //   try {
          //     if (event.key === 'Enter' || event.key === 'Tab' || event.target.value.length > 1) {
          //       setLoadingBeneficiary(true)
          //       let response = await api.http.get(`${api.addressName(beneficiariesNameInputValue)}`)
          //       setLocalBeneficiaries(response.data)
          //       setLoadingBeneficiary(false)
          //       setOpenBeneficiariesField(true)
          //     }
          //   } catch {
          //     setLoadingBeneficiary(false)
          //   }
          // }}
          onBlur={() => setOpenBeneficiariesField(false)}
          validation={validation}
        />
      </ConteinerItem>
    </div>
  )
}

CustomBeneficiarieFields.propTypes = {
  valueId: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  valueName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChangeId: PropTypes.func,
  onChangeName: PropTypes.func,
  // onChangeData: PropTypes.func,
  validation: PropTypes.string,
  api: PropTypes.object,
  api: PropTypes.shape({
    addressCode: PropTypes.func,
    addressName: PropTypes.func,
    http: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  }),
  disabled: PropTypes.bool,
  required: PropTypes.bool
}

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
  required: false
}

export default CustomBeneficiarieFields
