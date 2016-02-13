// import Firebase from 'firebase'
// import config from 'utils/config'
import ReactFireMixin from 'reactfire'

export const base = {
  _isBinded: (bindVar) => {
    return typeof this.firebaseRefs[bindVar] !== 'undefined'
  },

  // _getUserPosts: (userFirebase) => {
  //   if (!userFirebase || this._isBinded('starsFirebase')) return
  //   const refPosts = new Firebase(config.firebase.demoRef + 'posts')
  //   this.bindAsArray(
  //     refPosts.orderByChild('user_id').equalTo(userFirebase.auth.uid).limitToLast(10),
  //     'postsFirebase'
  //   )
  // },
  //
  // _getStars: (userFirebase) => {
  //   if (!userFirebase || this._isBinded('starsFirebase')) return
  //   const refStars = new Firebase(config.firebase.demoRef + 'stars/' + userFirebase.auth.uid)
  //   this.bindAsArray(
  //     refStars.orderByChild('created_at').limitToLast(10),
  //     'starsFirebase'
  //   )
  // }
}

// export class base {
//   _isBinded (bindVar) {
//     return typeof this.firebaseRefs[bindVar] !== 'undefined'
//   }
// }

export default {
  // base: new base()
  ...ReactFireMixin,
  base
}
