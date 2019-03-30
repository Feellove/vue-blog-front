const BASEURL = ''
const LOCALURL = 'http://localhost:3333/'
const URL = {
  getArticleList: LOCALURL + 'article/getArticleList',
  getOneArticle: LOCALURL + 'article/getOneArticle',
  getByClassesIdArticle: LOCALURL + 'article/getByClassesIdArticle',
  searchArticle: LOCALURL + 'article/searchArticle',
  getClasses: LOCALURL + 'classes/getClasses',
  getMessage: LOCALURL + 'message/getMessage',
  addMessage: LOCALURL + 'message/addMessage',
}
module.exports = URL
