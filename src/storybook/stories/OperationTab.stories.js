import React from "react";
import OperationTab from "../../components/Content/OperationTab/OperationTab.js";

export default {
  title: 'OperationTab',
  component: OperationTab
}

const TemplateDataTable = (args) => {
  return (
    <div>

      <OperationTab {...args} />

    </div>
  )
}

export const VariantScrollable = TemplateDataTable.bind({});

VariantScrollable.args = {
  className: '',
  variant: "scrollable",
  activeTab: 0,
  disableRipple: true,
  menuList: [
    { 'title': 'Família' },
    { 'title': 'Fator Moderador' },
    { 'title': 'Opcionais' },
    { 'title': 'Ocorrências' },
    { 'title': 'Prorrogações' },
    { 'title': 'Remessa Bancária' },
    { 'title': 'Impressão Segunda Via' },
    { 'title': 'Ocorrências Vinculadas' }
  ],
  childrenList: []

}