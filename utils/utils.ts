export function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function convertToPostUrl(category: string, stack:string, slug:string = ''){
  return '/' + category + '/' +  stack.toLowerCase().replace(/ /g, '-') +'/' + slug;
}

export function convertToStackUrl(category: string, stack:string,){
 return   '/' + camelToKebabCase(category) + '?stackName=' + camelToKebabCase(stack.replace('/concepts/g', '').replace(' ', '-'))
}

export function camelToKebabCase(str:string) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
