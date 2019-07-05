import axios from 'axios';
import {
  VIEW_NAV,
  VIEW_FOOT,
  VIEW_LOADING,
  UPDATE_HOME,
  UPDATE_FOLLOW,
  UPDATE_RANK,
  UPDATE_BANNER,
  UPDATE_RECOMMEND,
  UPDATE_SPECIAL,
  UPDATE_USER,
  UPDATE_DETAIL,
}from './types'
import { async } from 'q';
// import Axios from 'axios';

export default {
  [VIEW_NAV]:({state,commit},payload) => commit(VIEW_NAV,payload),
  [VIEW_FOOT]:({state,commit},payload) => commit(VIEW_FOOT,payload),
  [VIEW_LOADING]:({state,commit},payload) => commit(VIEW_LOADING,payload),

  [UPDATE_HOME] : async ({state,commit},payload) => {
    let res = await axios({url:'api/home',params:{_page:1,_limit:10}});
    commit(UPDATE_HOME,res.data.data);
    // console.log(res.data.data)
  }, 
  [UPDATE_FOLLOW] : async ({state,commit},payload) => {
    let res = await axios({url:'api/follow',params:{_page:1,_limit:10}});
    commit(UPDATE_FOLLOW,res.data.data);
  },   
  [UPDATE_RANK] : async ({state,commit},payload) => {
    let res = await axios({url:'api/rank',params:{_page:1,_limit:10}});
    commit(UPDATE_RANK,res.data.data);
  },   
  [UPDATE_BANNER] : async ({state,commit},payload) => {
    let res = await axios({url:'api/banner',params:{_limit:3}});
    commit(UPDATE_BANNER,res.data.data);
    // console.log(res.data.data)
  },   
  [UPDATE_RECOMMEND] : async ({state,commit},payload) => {
    let res = await axios({url:'api/recommend',params:{_page:1,_limit:10}});
    commit(UPDATE_RECOMMEND,res.data.data);
  },   
  [UPDATE_SPECIAL] : async ({state,commit},payload) => {
    let res = await axios({url:'api/special',params:{_page:1,_limit:10}});
    commit(UPDATE_SPECIAL,res.data.data);
  },   
  
  [UPDATE_DETAIL] : async ({state,commit},{id,dataName}) => {
    let res = await axios({url:`/api/${dataName}/${id}`});
    commit(UPDATE_DETAIL,res.data.data);
    // console.log(dataName,id)
    // console.log(res.data.data)
  },   

  [UPDATE_USER]: ({state,commit},{username,password})=>{
    return axios({
      url:'api/user',
      method:'get',
      data:{username,password,save:true}
    }).then(
      res=>{
        //无论登录成功还是失败，都要把信息返回去；       
          commit(UPDATE_USER,res.data)
          //把user的数据同步一份到localstorage
          localStorage.setItem('vueCase_user',JSON.stringify(res.data))
          return res.data
      }
    )
  }
}