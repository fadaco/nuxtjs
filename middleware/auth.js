 export default  ({app, redirect}) => {
    // If the user is not authenticated
    if (!app.$cookies.get('Authorization')) {
        return redirect('/')
      }
    
  }

  