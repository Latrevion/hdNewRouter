const host =`http://127.0.0.1:3003/article`
const all = ( )=>{
return fetch(host).then(r =>r.json())
}
export default {all}