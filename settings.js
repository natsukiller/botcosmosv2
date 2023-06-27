
const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/jpg'
global.doc2 = 'application/jpg'
global.doc3 = 'application/jpg'
global.doc4 = 'application/jpg'
global.doc5 = 'application/jpg'
global.doc6 = 'application/jpg'

//owmner v card
global.owner = ['5521966357790'] //ur owner number
global.ownername = "🧌Natsukiller👻" //ur owner name
global.ytname = "YT:Em breve" //ur yt chanel name
global.socialm = "GitHub: Em breve" //ur github or insta name
global.location = "Brasil, RJ, Rio de Janeiro" //ur location

//bot bomdy 
global.ownernomer = "5521966357790" //ur number
global.premium = ['5521966357790'] //ur premium number
global.botname = 'Cosmos' //ur bot name
global.linkz = "Não tem nada aqui" //your theme url which will be displayed on whatsapp
global.websitex = "Em breve" //ur website to be displayed
global.botscript = 'Em breve' //script link
global.themeemoji = "🧙" //ur theme emoji
global.packname = "Sticker By" //ur sticker watermark packname
global.author = "O fantástico Cosmos\n\n\n whatsapp bot developed by\n🦄Dream Guy Xeon\n\n\n\n\n\n\n\n       --------______-------\n\n\n\n\n\n\n\nContact No. : +5521966357790" //ur sticker watermark author
global.wm = "Cosmos.inc" //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'Aqui você vai!',
    admin: 'Este recurso pode ser usado apenas por administradores!',
    botAdmin: 'Bot deve ser administrador primeiro!',
    premime: 'Recursos especiais premium Se você deseja se registrar, digite Rent',
    owner: 'Este recurso pode ser usado apenas pelo proprietário',
    group: 'Recursos usados ​​apenas para grupos!',
    private: 'Recursos usados ​​apenas para bate-papo privado!',
    bot: 'Este recurso pode ser usado apenas por bot',
    wait: 'Em process...',
    linkm: 'Onde está o link?',
    endLimit: 'Seu limite diário expirou, o limite será redefinido a cada 12 horas',
    nsfw: 'O recurso nsfw não foi ativado, entre em contato com o administrador para ativar',
}

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
