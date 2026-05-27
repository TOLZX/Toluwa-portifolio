export const trackPage = (path) => {
if(window.gtag){
window.gtag('config','G-1R8PFGNQDS',{
page_path: path,
})
}
}

export const trackEvent = (action,label) => {
if(window.gtag){
window.gtag('event',action,{
event_category:'engagement',
event_label:label
})
}
}