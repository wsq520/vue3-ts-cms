import { IForm } from "@/base-ui/form";

export const searchFormConfig: IForm = {
    labelWidth: "100px",
    formItems: [
      {
        field: 'name',
        type: "input",
        label: "角色名称",
        rules: [],
        placeholder: "请输入角色名称",
      },
      {
        field: 'intro',
        type: "input",
        label: "权限介绍",
        rules: [],
        placeholder: "请输入权限介绍",
      },
      {
        field: 'createTime',
        type: "datepicker",
        label: "创建时间",
        rules: [],
        otherOptions: {
          startPlaceholder: "开始",
          endPlaceholder: "结束",
          type: "daterange",
        },
      }
    ]
  }