// const userList = [
//   {
//     id: 'U001',
//     name: '张三',
//     age: '23',
//     job: '前端工程师'
//   },
//   {

const dataList = {
  status: true,
  message: 'success',
  data: {
    total: 100,
    'rows|10': [
      {
        id: '@guid',
        name: '@cname',
        'value|20-30': 23,
        'type|1': ['工程合同', '咨询合同', '工程设计'],
        signDate: '@Date'
      }
    ]
  }
}
export default {
  'get|/contract/getAllContract': dataList
}
