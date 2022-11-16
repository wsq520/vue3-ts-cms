import { IForm } from "@/base-ui/form";

export const searchFormConfig: IForm = {
    labelWidth: "100px",
    itemStyle: {
      padding: "2px 10px",
    },
    colLayout: {
      span: 8,
    },
    formItems: [
      {
        field: 'id',
        type: "input",
        label: "id",
        rules: [],
        placeholder: "请输入id",
      },
      {
        field: 'name',
        type: "input",
        label: "用户名",
        rules: [],
        placeholder: "请输入用户名",
      },
      {
        field: 'realname',
        type: "input",
        label: "真实姓名",
        rules: [],
        placeholder: "请输入真实姓名",
      },
      {
        field: 'cellphone',
        type: "input",
        label: "电话号码",
        rules: [],
        placeholder: "请输入电话号码",
      },
      {
        field: 'enable',
        type: "select",
        label: "用户状态",
        rules: [],
        placeholder: "请选择用户状态",
        options: [
          { title: "启用", value: 1 },
          { title: "禁用", value: 0 },
        ],
      },
      {
        field: 'createAt',
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