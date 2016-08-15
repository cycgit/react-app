export const toggleHeader = () => {
  return {
    type: 'TOGGLE_HEADER'
  }
}

export const checkType = (typeName) =>{
  return {
    type: 'CHECK_TYPE',
    typeName
  }
}
