export default  ({app, redirect}) => {
    // If the user is not authenticated
    if (app.$cookies.get('user').type === 1) {
        return redirect('/')
      }
    
  }
