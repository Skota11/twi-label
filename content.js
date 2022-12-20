async function useURLFunc() {
    let sendMsgFunc = () => {
        return new Promise(resolve => {
            chrome.runtime.sendMessage({ greeting: 'url' }, response => {
                resolve(response.farewell);
            });
        });
    };
    let url = await sendMsgFunc();
    return url;
}

(async () => {
    await useURLFunc();
})();

let lastid="";

async function hide_like() {
    const url = await useURLFunc();
    if (url.includes("/status/")) {
        let url_search = url.indexOf('/status/');

//「&search=」を含む文字を抽出
let url_txt = url.substring(url_search);
let ret = url_txt.replace("/status/", "");
if(!ret.includes("/")){
        const client = await fetch(`https://twi.skota11.repl.co/tweet/${ret}`, {
            mode: 'cors'
        }).then((res)=>{
            return res.json()
          }).then((array) => {return array.client})
          const elements = document.getElementsByClassName('css-4rbku5 css-18t94o4 css-901oao css-16my406 r-1loqt21 r-xoduu5 r-1q142lx r-1w6e6rj r-1tl8opc r-9aw3ui r-bcqeeo r-3s2u2q r-qvutc0')[0];
          if (!elements.innerHTML.includes(`<span>${client}</span>`)) {
            elements.innerHTML = elements.innerHTML + `<span>${client}</span>`
          }
}
}
}
const observer = new MutationObserver(hide_like)
observer.observe(document.body, {childList: true, subtree: true});