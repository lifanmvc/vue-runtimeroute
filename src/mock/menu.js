const menuList = {
  status: true,
  message: 'success',
  data: [
    {
      id: 'menu002',
      pId: null,
      name: '经营管理',
      type: 0,
      children: [
        {
          id: 'menu0021',
          pId: 'menu002',
          name: '合同管理',
          children: [
            {
              id: 'menu00211',
              pId: 'menu0021',
              name: '我的合同'
            },
            {
              id: 'menu00212',
              pId: 'menu0021',
              name: '部门合同'
            },
            {
              id: 'menu00213',
              pId: 'menu0021',
              name: '公司合同'
            }
          ]
        }
      ]
    },
    {
      id: 'menu003',
      pId: null,
      name: '生产管理',
      type: 0
    },
    {
      id: 'menu004',
      pId: null,
      name: '行政办公',
      type: 0
    }
  ]
}
export default {
  'get|/menu/getAllMenu': menuList
}
