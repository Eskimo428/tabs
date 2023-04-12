const tabs = Array.from(document.querySelectorAll('.tab'))
const tabsContent = Array.from(document.querySelectorAll('.tab__content'))
const tabNavigation = document.querySelector('.tab__navigation')


// console.log(tabNavigation)

tabNavigation.addEventListener('click',(event) =>{
    let target = event.target

    if(target.classList.contains('tab')){
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('tab_active')
            tabsContent[i].classList.remove('tab__content_active')

        }
        target.classList.add('tab_active')
        let indexContent = tabs.indexOf(target)
        tabsContent[indexContent].classList.add('tab__content_active')
    }

    
   
})


