
const weextest = {
    
      setTitle: function (title) {
        title = title || 'Weex HTML5'
        try {
          title = decodeURIComponent(title)
        }
        catch (e) {}
        document.title = title
      },
      log(param){
        weex.requireModule('modal').toast({message:param})
      }
    }
    
const meta = {
      weextest: [{
        name: 'setTitle',
        args: ['string']
      }]
    }
    
const init = function(Weex){
    Weex.registerApiModule('weextest', weextest, meta)
}

export default {
  init
}