const userInfo = {
  status: true,
  message: 'success',
  data: {
    id: '@guid',
    name: '@cname',
    token: '@guid'
  }
}
export default {
  'get|/login': userInfo
}
