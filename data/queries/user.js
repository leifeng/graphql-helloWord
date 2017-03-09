import UserType from '../types/UserType'
// import {User} from '../models'
const user = {
    type: UserType,
    resolve(parentValue, args, ctx) {
        console.log(ctx.request.body);
        return {
            userName:'2sdf',
            age:10,
            sex:true
        }
    }
}
export default user;