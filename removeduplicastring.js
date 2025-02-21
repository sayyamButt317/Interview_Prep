const p =() => new Promise((resolve, reject) => {
  reject('Rejected')
  
})

const foo = () => {
  try {
    p()
  } catch (err) {
      console.log(err)
  }
}


