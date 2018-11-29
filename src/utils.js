import isPropValid from '@emotion/is-prop-valid'

const testOmitPropsOnStringTag = prop => true
const testOmitPropsOnComponent = key => {
  console.log(key)
  return key !== 'theme' && key !== 'ref'
}

export const getDefaultShouldForwardProp = tag =>
  typeof tag === 'string' &&
  // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96
    ? testOmitPropsOnStringTag
    : testOmitPropsOnComponent
