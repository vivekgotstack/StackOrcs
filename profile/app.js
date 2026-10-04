const projects = {
  modastitch: {title:'ModaStitch',kind:'COMMERCE PLATFORM',category:'ECOMMERCE / CLIENT WORK',description:'A clothing storefront with product discovery, cart and checkout, inventory controls, and an admin workspace.',tags:['Storefront & checkout','Inventory & admin','Customer analytics'],image:'assets/modastitch.webp',alt:'Actual ModaStitch clothing storefront with shopping navigation and collection imagery',label:'modastitch.com',href:'https://modastitch.com',link:'Visit project'},
  rivixa: {title:'Rivixa',kind:'HEALTHCARE WEBSITE',category:'LIFESCIENCES / CLIENT WORK',description:'A healthcare company website with three therapeutic areas, a searchable product catalogue, and product enquiry flows.',tags:['146 product records','Search & filters','Company & enquiries'],image:'assets/rivixa.webp',alt:'Actual Rivixa Lifesciences website with the headline Advancing science, Caring for life and clinical imagery',label:'Rivixa Lifesciences / website preview',href:'assets/rivixa.webp',link:'View preview'},
  meetgrid: {title:'MeetGrid',kind:'SCHEDULING PRODUCT',category:'TEAM SCHEDULING / PRODUCT ENGINEERING',description:'One workspace to match team availability with the right room. Includes recurring meetings, bookings, and plan-based tools.',tags:['People + room matching','Recurring meetings','Billing & reports'],image:'assets/meetgrid.webp',alt:'Actual MeetGrid website with a team availability preview and people plus place scheduling',label:'meetgrid.stackorcs.com',href:'https://meetgrid.stackorcs.com',link:'Visit project'},
  chatsaver: {title:'ChatSaver',kind:'KNOWLEDGE PRODUCT',category:'OFFLINE-FIRST / PRODUCT ENGINEERING',description:'A knowledge vault that turns ChatGPT exports into editable, searchable notes, with offline access and cross-device recovery.',tags:['Offline-first PWA','Notes & search','Sync & recovery'],image:'assets/chatsaver.webp',alt:'Actual ChatSaver interface with ChatGPT import, blank note creation, and vault recovery controls',label:'chatsaver.stackorcs.com',href:'https://chatsaver.stackorcs.com',link:'Visit project'}
};
const tabs = [...document.querySelectorAll('.project-tab')];
const keys = Object.keys(projects);
const byId = id => document.getElementById(id);
let request = 0;
function chooseProject(key, updateUrl = true) {
  const data = projects[key]; if(!data) return;
  request++;
  const current = request;
  tabs.forEach(tab => {const selected=tab.dataset.project===key;tab.classList.toggle('active',selected);tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;});
  byId('project-panel').setAttribute('aria-labelledby','tab-'+key);
  byId('project-title').textContent=data.title;
  byId('project-category').textContent=data.category;
  byId('project-description').textContent=data.description;
  byId('preview-kind').textContent=data.kind;
  byId('browser-label').textContent=data.label;
  byId('project-link').href=data.href;
  byId('project-link').setAttribute('aria-label',data.link+' — '+data.title);
  byId('project-link-label').textContent=data.link;
  byId('project-tags').replaceChildren(...data.tags.map(tag=>{const li=document.createElement('li');li.textContent=tag;return li;}));
  document.querySelector('.work-count').textContent=`0${keys.indexOf(key)+1} / 04`;
  document.querySelector('.preview-stage').dataset.theme=key;
  const preload = new Image(); preload.onload=()=>{if(current!==request)return;byId('project-image').src=data.image;byId('project-image').alt=data.alt;};preload.src=data.image;
  const panel=byId('project-panel');panel.classList.remove('changing');void panel.offsetWidth;panel.classList.add('changing');
  if(updateUrl) history.replaceState(null,'','#'+key);
}
tabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>chooseProject(tab.dataset.project));
  tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;if(event.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next===undefined)return;event.preventDefault();tabs[next].focus();chooseProject(tabs[next].dataset.project);});
});
const fromHash=()=>{const key=location.hash.slice(1);if(projects[key])chooseProject(key,false);};
fromHash();window.addEventListener('hashchange',fromHash);
let toastTimer;
function showToast(message){const status=byId('share-status');status.textContent=message;status.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>status.classList.remove('visible'),3500);}
function shareUrl(){const url=new URL(location.href);url.search='';return url.href;}
async function copyLink(){try{await navigator.clipboard.writeText(shareUrl());showToast('Link copied. Ready to share.');if(byId('share-dialog').open)byId('share-dialog').close();}catch{byId('share-url').value=shareUrl();if(!byId('share-dialog').open)byId('share-dialog').showModal();byId('share-url').focus();byId('share-url').select();showToast('Select the link, then copy it.');}}
byId('share-page').addEventListener('click',async()=>{if(navigator.share){try{await navigator.share({title:'StackOrcs — Good ideas. Real software.',text:'A quick look at what StackOrcs builds.',url:shareUrl()});return;}catch(error){if(error.name==='AbortError')return;}}await copyLink();});
byId('copy-share').addEventListener('click',copyLink);
document.querySelector('.dialog-close').addEventListener('click',()=>byId('share-dialog').close());
byId('share-dialog').addEventListener('click',event=>{if(event.target===byId('share-dialog')){const rect=event.target.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)event.target.close();}});
