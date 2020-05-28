// const userList = [
//   {
//     id: 'U001',
//     name: '张三',
//     age: '23',
//     job: '前端工程师'
//   },
//   {
//     id: 'U002',
//     name: '李四',
//     age: '24',
//     job: '后端工程师'
//   }
// ]

// export default {
//   'get|/hr/getAllUser': option => {
//     return {
//       status: 200,
//       message: 'success',
//       data: userList
//     }
//   }
// }

const userList = {
  status: true,
  message: 'success',
  data: {
    total: 100,
    'rows|10': [
      {
        id: '@guid',
        name: '@cname',
        'age|20-30': 23,
        birth: '@Date',
        'address|1': ['北京', '上海', '广州'],
        'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师']
      }
    ]
  }
}
export default {
  'get|/hr/getAllUser': userList
}
