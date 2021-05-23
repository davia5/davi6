/*Olá usuário..
Este bot foi criado para o uso sem fins lucrativos
Criador: Italu
Colaboradores: Resen e Toin
*/

//_API WHATSAPP WEB
const { WAConnection, MessageType, Presence, Mimetype, GroupSettingChange, MessageOptions, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, waChatKey, mentionedJid, processTime, ChatModification } = require('@adiwajshing/baileys');

//_MÓDULOS NPM
const fs = require('fs');
const moment = require('moment-timezone');
const { exec, spawn } = require('child_process');
const kagApi = require('@kagchi/kag-api');
const fetc = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const { removeBackgroundFromImageFile } = require('remove.bg');
const imgbb = require('imgbb-uploader');
const lolis = require('lolis.life');
const loli = new lolis();
const speed = require('performance-now');
const cd = 4.32e+7 ;
const qrcode = require("qrcode-terminal");
const crypto = require('crypto');
const axios = require('axios').default;
const imageToBase64 = require('image-to-base64');
const googleImage = require('g-i-s');

//_ARQUIVOS DA LIB
const {color, bgcolor} = require('./lib/color');
const {fetchJson} = require('./lib/fetcher');
const {recognize} = require('./lib/ocr');
const {wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close, addATM, addKoinUser, checkATMuser, temporizador } = require('./lib/functions');
const { webp2gifFile } = require("./lib/gif.js")
const { cmdadd } = require('./lib/totalcmd.js')
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./lib/register.js')
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown } = require('./lib/leveling.js')
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js')//JOGO DA VELHA,AGRADECIMENTOS: IRIS(kill), Resen
const { addLimit, getLimit } = require('./lib/limit.js')// LIMITADOR, AGRADECIMENTOS: IRIS(kill), Resen
const { addMetadata } = require('./lib/exif.js')


//_JSON GRUPO/CONFIGURAÇÕES
const nsfw = JSON.parse(fs.readFileSync('./data/nsfw.json'));
const welkom = JSON.parse(fs.readFileSync('./data/welkom.json'));
const z24 = JSON.parse(fs.readFileSync('./data/zm.json'))
const _leveling = JSON.parse(fs.readFileSync('./data/leveling.json'));

//_JSON INFORMAÇÕES DO USUÁRIO
const _level = JSON.parse(fs.readFileSync('./datauser/level.json'));
const _registered = JSON.parse(fs.readFileSync('./datauser/registered.json'));
const uang = JSON.parse(fs.readFileSync('./datauser/uang.json'));
const ban = JSON.parse(fs.readFileSync('./datauser/banned.json'));
const prem = JSON.parse(fs.readFileSync('./datauser/premium.json'));

//_ OUTROS ARQUIVOS DO BOT
const tictactoe = JSON.parse(fs.readFileSync('./database/ttt/tictactoe.json'));
const daily = JSON.parse(fs.readFileSync('./data/diario.json'))
const { msgFilter, isUrl } = require('./utils')
const { help, m18 } = require('./help/help')
const sotoy = JSON.parse(fs.readFileSync('./data/sotoy.json'))
const { ptbr } = require('./mess')
const totalcmd = JSON.parse(fs.readFileSync('./data/totalcmd.json'))[0].totalcmd
const { Exkey } = JSON.parse(fs.readFileSync('./data/apikey.json')) 
/*👆API KEY EX TEAM👆 adquira a sua key com*/o = 'wa.me/+558598669655'

//_INFORMAÇÕES DO BOT(settings)
const infos = JSON.parse(fs.readFileSync('./data/settings.json'))
const { prefix, ownerName, ownerNumber, cdd, ammOff, cr, crfig, crlv, crtt, crh } = infos
const blocked = []

//_VCARD DONO DO BOT
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Italu🧙‍♂️\n' 
            + 'ORG:Dono do Tiringa;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=557499510904:+55 (74) 9951-0904\n' 
            + 'END:VCARD'

//_TIC-TAC-TOE By: Resen
const { ttthelp } = require('./database/ttt/TTTconfig/ttthelp');
const { tttme } = require('./database/ttt/TTTconfig/tttme');
var tttset = require('./database/ttt/TTTconfig/tttset.json');
var esp = require('./database/ttt/TTTconfig/tttframe.json');

//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA EMPATE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//HARD
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VITÓRIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}
///_ END TIC-TAC-TOE CONFIG by: Resen

//_CONEXÃO WHATSAPP WEB 
async function starts() {
	const tiringa = new WAConnection()
	tiringa.logger.level = 'warn'
	console.log(banner.string)
	tiringa.on('qr', () => {
		console.log(color('👆'), color(' Escanear o código acima para iniciar o Tiringa-BOT!'))
	})

	fs.existsSync('./tiringa.json') && tiringa.loadAuthInfo('./tiringa.json')
	tiringa.on('connecting', () => {
		start('2', 'Conectando o Tiringa-BOT...')
	})
	tiringa.on('open', () => {
		success('2', 'Tiringa-BOT conectado!!!')
	})
	await tiringa.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./tiringa.json', JSON.stringify(tiringa.base64EncodedAuthInfo(), null, '\t'))

//_FUCTION DE BOAS-VINDAS
tiringa.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await tiringa.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				teks = `Olá @${num.split('@')[0]}\nSeja bem vindo(a) ao grupo: ${mdata.subject}`
				let welt = await getBuffer(`https://api-exteam.herokuapp.com/api/welcome?name=${encodeURIComponent(pushname)}&gcname=${encodeURIComponent(groupName)}&picurl=https://i.waifu.pics/8TL6ycS.jpg&gcurl=https://i.waifu.pics/8TL6ycS.jpg&mem=100`)
				tiringa.sendMessage(mdata.id, welt, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await tiringa.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `O integrante @${num.split('@')[0]} saiu do grupo... bye bye👋`
				let buff = await getBuffer(ppimg)
				tiringa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
    tiringa.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

      tiringa.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
			const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
            const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
            const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
            const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
            const anun = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
            const testat = budy
            const totalchat = await tiringa.chats.all()
			const botNumber = tiringa.user.jid
			const ownerNumber = [`557499510904@s.whatsapp.net`]
			const ownerNumberB = []
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await tiringa.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
            const isBanned = ban.includes(sender)
			const isWelkom = isGroup ? welkom.includes(from) : true
            const isNsfw = isGroup ? nsfw.includes(from) : true
			const isOwner = ownerNumber.includes(sender)
            const isUser = checkRegisteredUser(sender)
			const isPremium= prem.includes(sender)
			const isOwnerB = ownerNumberB.includes(sender)
            const isLevelingOn = isGroup ? _leveling.includes(from) : true
            const q = args.join(' ')
            const id = botNumber
            const tescuk = ["0@s.whatsapp.net"]
			let pushname = tiringa.contacts[sender] != undefined ? tiringa.contacts[sender].vname || tiringa.contacts[sender].notify: undefined
    
			const reply = (tej) => {
				tiringa.sendMessage(from, tej, text, {quoted:mek})
			}
			const sendMess = (teks) => {
				tiringa.sendMessage(from, teks, text)
			}
            const sendImage = (tis) => {
		        tiringa.sendMessage(from, tis, image, {quoted:mek})
            }
			const mentions = (ops, memberr, sender, id) => {
				(id == null || id == undefined || id == false) ? tiringa.sendMessage(from, ops.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : tiringa.sendMessage(from, ops.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const costum = (pesan, tipe, target, target2) => {
                 tiringa.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
            }
             const sendPtt = (teks) => {
                 tiringa.sendMessage(from, audio, mp3, {quoted: mek })
            }
             
//_FUCTION PATENTE
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {patt = 'Bronze  I🥉' } else if (nivelAtual === 2) {patt = 'Bronze II🥉'} else if (nivelAtual === 3) {patt = 'Bronze  III🥉'} else if (nivelAtual === 4) {patt = 'Bronze  IV🥉'} else if (nivelAtual === 5) {patt = 'Bronze  V🥉'} else if (nivelAtual === 6) {patt = 'Prata I🥈'} else if (nivelAtual === 7) {patt = 'Prata II🥈'} else if (nivelAtual === 8) {patt = 'Prata III🥈'} else if (nivelAtual === 9) {patt = 'Prata IV🥈'} else if (nivelAtual === 10) {patt = 'Prata V🥈'} else if (nivelAtual === 11) {patt = 'Ouro I🥇'} else if (nivelAtual === 12) {patt = 'Ouro II🥇'} else if (nivelAtual === 13) {patt = 'Ouro III🥇'} else if (nivelAtual === 14) {patt = 'Ouro IV🥇'} else if (nivelAtual === 15) {patt = 'Ouro V🥇'} else if (nivelAtual === 16) {patt = 'Campeão I🏆'} else if (nivelAtual === 17) {patt = 'Campeão II🏆'} else if (nivelAtual === 18) {patt = 'Campeão III🏆'} else if (nivelAtual === 19) {patt = 'Campeão IV🏆'} else if (nivelAtual === 20) {patt = 'Campeão V🏆'} else if (nivelAtual === 21) {patt = 'Diamante I 💎'} else if (nivelAtual === 22) {patt = 'Diamante II 💎'} else if (nivelAtual === 23) {patt = 'Diamante III 💎'} else if (nivelAtual === 24) {patt = 'Diamante IV 💎'} else if (nivelAtual === 25) {patt = 'Diamante V 💎'} else if (nivelAtual === 26) {patt = 'Mestre I 🐂'} else if (nivelAtual === 27) {patt = 'Mestre II 🐂'} else if (nivelAtual === 28) {patt = 'Mestre III 🐂'} else if (nivelAtual === 29) {patt = 'Mestre IV 🐂'} else if (nivelAtual === 30) {patt = 'Mestre V 🐂'} else if (nivelAtual === 31) {patt = 'Mítico I 🔮'} else if (nivelAtual === 32) {patt = 'Mítico II 🔮'} else if (nivelAtual === 33) {patt = 'Mítico III 🔮'} else if (nivelAtual === 34) {patt = 'Mítico IV 🔮'} else if (nivelAtual === 35) {patt = 'Mítico V 🔮'} else if (nivelAtual === 36) {patt = 'God I🕴'} else if (nivelAtual === 37) {patt = 'God II🕴'} else if (nivelAtual === 38) {patt = 'God III🕴'} else if (nivelAtual === 39) {patt = 'God IV🕴'} else if (nivelAtual === 40) {patt = 'God V🕴'} else if (nivelAtual > 41) {patt = '🛐Grande Mestre🛐'}
          
//_TIPO DE USUÁRIO
if (groupAdmins) {prema = 'Ademir🤓'}if (isPremium) {prema = 'Premium😎'} if (isOwner) {prema = 'El Italu🕴🏽'} if (isUser) {prema = 'Registrado 🥳'} else {var prema = 'Membro comum🗿'}

//_XP COM LEVELING ATIVO
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * (20 - 30 + 45) + 15)
const requiredXp = 20 * Math.pow(currentLevel, 2) + 150 * currentLevel + 1000
const getLevel = getLevelingLevel(sender)
const namelv = checkId
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
const lvup = {
text:
`    ════❖LEVEL UP❖════

  ╭╼╾╼╾╼╾╼╾╼╾╼╾╼
  │‣ Nome: @${namelv.split('@')[0]}
  ├╼╾╼╾╼╾╼╾╼╾╼╾╼
  │‣ XP: ${getLevelingXp(sender)}
  ├╼╾╼╾╼╾╼╾╼╾╼╾╼
  │‣ Level: ${getLevel} -> ${getLevelingLevel(sender)}
  ├╼╾╼╾╼╾╼╾╼╾╼╾╼
  │‣ Patente: ${patt}
  ╰╼╾╼╾╼╾╼╾╼╾╼╾╼
  
   ════❖LEVEL UP❖════`,
contextInfo: {mentionedJid: [namelv]}}
tiringa.sendMessage(from, lvup, text, {quoted: mek})
//tiringa.sendMessage(from, lvup, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}}
}
} catch (err) {
console.error(err)
}
} 

//_DINHEIRO 
if (isGroup) {
const checkATM = checkATMuser(sender)
try {
if (checkATM === undefined) addATM(sender)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(sender, uangsaku)
} catch (err) {
console.error(err)
}
}
            
if (budy.includes("://chat.whatsapp.com/")){
if (!isGroup) return
if (!isAntilink) return
if (isGroupAdmins) return('🧐')
tiringa.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(`Link de grupos não são permitidos aqui${sender.split("@")[0]}`)
setTimeout( () => {
tiringa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 1000)
setTimeout( () => {
tiringa.updatePresence(from, Presence.composing)
reply("adios")
}, 0)
}

////FINALIZAR TTT AUTOMATICAMENTE By: Resen
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isLevelingOn) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
tiringa.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣  PUNIÇÃO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
tiringa.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}

//_TIPO DE MENSAGENS
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

//_CORES(cores das letras no terminal)
colors = ['red','white','black','blue','yellow','green','aqua','magenta','orange']

//_VISUALIZA AS MENSAGENS 
tiringa.chatRead(from)

//if (isCmd && isMute && !isGroupAdmins && !isOwner && !isPremium) return

//ANTI-SPAM BY ITALU
if (isCmd && msgFilter.isFiltered(from)) {
tiringa.sendMessage(from, `Sem flood @${sender.split('@')[0]}...\n\nAguarde 5 segundos antes de usar outro comando✅`, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
return console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
		
//_CONTAGEM DE COMANDOS
if (isCmd) cmdadd()
		
//_USUÁRIO BANIDO
if (isCmd && isBanned) {
reply(ptbr.ban())
return console.log(color('[BAN] Ignorando comando', 'blue'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
          
//_COMANDOS
if (!isGroup && isCmd) console.log(color('COMANDO RECEBIDO', 'magenta'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color('COMANDO:'), color(`${command}`),'DE:', color(pushname))
if (isCmd && isGroup) console.log(color('COMANDO RECEBIDO', 'magenta'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color('COMANDO:'), color(`${command}`),'DE:', color(pushname),'EM:', color(groupName))
			
//_MENSAGENS
if (!isCmd && isGroup) console.log(color('MENSAGEM RECEBIDA', 'aqua'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), 'DE:', color(pushname),'EM:', color(groupName))
if (!isGroup && !isCmd) console.log(color('MENSAGEM RECEBIDA', 'aqua'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), 'DE:', color(pushname))

//_RESPONDER AUTOMATICAMENTE
if ((budy === 'bot') || (budy === 'BOT') || (budy === 'Bot')) {
buf = fs.readFileSync(`./src/what-vader.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === 'posso ser adm ?') || (budy === 'Posso ser adm ?') || (budy === '?')) {
buf = fs.readFileSync(`./src/no-vader.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === 'aqui tem bot ?') || (budy === 'Aqui tem bot') || (budy === 'bot ta funcionando')) {
buf = fs.readFileSync(`./src/yes-darth-vader.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === 'vou sair') || (budy === 'Vou sair') || (budy === 'estou saindo')) {
buf = fs.readFileSync(`./src/grupo-vai-querer.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === 'saindo aqui') || (budy === 'Saindo aqui') || (budy === 'Grupo')) {
buf = fs.readFileSync(`./src/grupo-vai-querer.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === 'alguma mulher') || (budy === 'tem mulher') || (budy === 'kd as mulheres')) {
buf = fs.readFileSync(`./src/postamuienao.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === 'vão dormir') || (budy === 'Vão dormir') || (budy === 'Vai dormir')) {
buf = fs.readFileSync(`./src/vai dormir.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === 'pipoca') || (budy === 'Pipoca') || (budy === 'acho bom')) {
buf = fs.readFileSync(`./src/pipoca.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === 'Leonardo') || (budy === 'Leo') || (budy === 'leo')) {
buf = fs.readFileSync(`./src/leo.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === 'dia 12') || (budy === 'dia dos namorados') || (budy === 'Dia dos namorados')) {
buf = fs.readFileSync(`./src/dia dos namorados.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === 'bom dia') || (budy === 'Bom dia') || (budy === 'bm dia')) {
buf = fs.readFileSync(`./src/bom dia.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === 'josé') || (budy === 'José') || (budy === 'Jose')) {
buf = fs.readFileSync(`./src/zezao.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === 'Marcia') || (budy === 'marcia') || (budy === 'marcinha')) {
buf = fs.readFileSync(`./src/marcia.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === 'mandar') || (budy === 'mandem') || (budy === 'manda')) {
buf = fs.readFileSync(`./src/mandar.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === 'putaria') || (budy === 'porno') || (budy === '+18')) {
buf = fs.readFileSync(`./src/cabare.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === 'sexo') || (budy === 'tranzar') || (budy === 'pinto')) {
buf = fs.readFileSync(`./src/bosta.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === 'meu pau') || (budy === 'bct') || (budy === 'buceta')) {
buf = fs.readFileSync(`./src/respeita.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === 'Gabriel') || (budy === 'gabriel') || (budy === 'biel')) {
buf = fs.readFileSync(`./src/Gabriel.mp3`)
tiringa.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
}
if ((budy === "fdp") || (budy === "Fdp") || (budy === "FDP")) {
tiringa.updatePresence(from, Presence.composing)
reply("teu pai")
}
if ((budy === "oi bot") || (budy === "Oi bot")) {
tiringa.updatePresence(from, Presence.composing)
reply("Oie")
}
if ((budy === "Boa madrugada") || (budy === "Boa Madrugada")) {
tiringa.updatePresence(from, Presence.composing)
reply("Acordada eça ora limdar ?")
}
if ((budy === "pv") || (budy === "Pv")) {
tiringa.updatePresence(from, Presence.composing)
reply("Pv é minha pika")
}
if ((budy === "bm dia") || (budy === "Bom dia")) {
tiringa.updatePresence(from, Presence.composing)
reply("Bom diaaa, o sol já nasceu la na fazendinha")
}
if ((budy === "mandem o link do grupo") || (budy === "Mandem o link do grupo")) {
tiringa.updatePresence(from, Presence.composing)
reply("manda o número ai q alguém adiciona")
}
if ((budy === "vtnc") || (budy === "Vtnc")) {
tiringa.updatePresence(from, Presence.composing)
reply("Tomar no cu é vitamina, como você e suas primas")
}
if ((budy === "vsfd") || (budy === "Vsfd")) {
tiringa.updatePresence(from, Presence.composing)
reply("Vtnc")
}
if ((budy.match("sexo")) || (budy.match("Sexo"))) {
tiringa.updatePresence(from, Presence.composing)
reply(`você falou em coito?KKKKKKKKKKKKKKKKKKKKKKKKK`)
}
if (budy === "pnc") {
tiringa.updatePresence(from, Presence.composing)
reply(`vsfd ${pushname}`)
}
if ((budy === "cleito") || (budy === "Cleito")) {
cleitu = fs.readFileSync(`./src/edmi.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "Edmilson") || (budy === "edmilson")) {
cleitu = fs.readFileSync(`./src/cleito.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "Manuela") || (budy ==="Manoela")) {
cleitu = fs.readFileSync(`./src/Manuela.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "Paulista") || (budy === "paulista")) {
cleitu = fs.readFileSync(`./src/ddd11.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "São Paulo") || (budy === "sp")) {
cleitu = fs.readFileSync(`./src/paulista.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "Matheus") || (budy === "matheus")) {
cleitu = fs.readFileSync(`./src/Matheus.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "timão") || (budy === "Timão")) {
cleitu = fs.readFileSync(`./src/Corinthians.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "Minas gerais") || (budy === "Mg")) {
cleitu = fs.readFileSync(`./src/bao.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "sou nova aqui") || (budy === "Sou nova aqui")) {
cleitu = fs.readFileSync(`./src/neima.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "bahia") || (budy === "Bahia")) {
cleitu = fs.readFileSync(`./src/baiano.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "rio grande do sul") || (budy === "Sulista")) {
cleitu = fs.readFileSync(`./src/sulista.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "kkkkkk") || (budy === "KKKKKK")) {
cleitu = fs.readFileSync(`./src/risada.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "Carioca") || (budy === "carioca")) {
cleitu = fs.readFileSync(`./src/carioca.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "Rio de Janeiro") || (budy === "rio de janeiro")) {
cleitu = fs.readFileSync(`./src/carioca.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "Boa noite") || (budy === "boa noite")) {
cleitu = fs.readFileSync(`./src/boanoite.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "Ceará") || (budy === "ceará")) {
cleitu = fs.readFileSync(`./src/cearense.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "Ana") || (budy === "ana")) {
cleitu = fs.readFileSync(`./src/ana.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "Julia") || (budy === "julia")) {
cleitu = fs.readFileSync(`./src/julia.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "Marcio") || (budy === "marcio")) {
cleitu = fs.readFileSync(`./src/marcio.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "AUD-2021") || (budy === "AUD-")) {
cleitu = fs.readFileSync(`./src/audio.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "Rafael") || (budy === "rafael")) {
cleitu = fs.readFileSync(`./src/rafael.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy === "Davi") || (budy === "davi")) {
cleitu = fs.readFileSync(`./src/davi.webp`)
tiringa.sendMessage(from, cleitu, sticker, {quoted: mek})
}
if ((budy.includes('casada')) || (budy.includes('Casada'))) {
reply('Oi casada 😏')
}

if (budy.match('tiringa')) {
result = fs.readFileSync(`./src/mask.webp`)
tiringa.sendMessage(from, result, sticker, {quoted: mek })
} else if (budy.match('Tiringa')) {
result = fs.readFileSync(`./src/mask.webp`)
tiringa.sendMessage(from, result, sticker, {quoted: mek })
} else if (budy.match('TIRINGA')) {
result = fs.readFileSync(`./src/mask.webp`)
tiringa.sendMessage(from, result, sticker, {quoted: mek })
}

switch(testat) {
//_ COMANDOS Z24
case 'lia':
case 'Lia':
case 'LIA':
if (!isGroup) return reply( 'L-Lia-chan 😳👉👈')
break
               
case 'eat':
case 'Eat':
case 'EAT':
if (!isGroup) return reply( 'Ala o maluco que gosta de poesia acústicaKKKKKKKKK')
break

case 'braia':
case 'Braia':
case 'BRAIA':
if (!isGroup) return reply( 'Lek do rabão gostoso😋')
break
             
case 'gil':
case 'Gil':
case 'GIL':
if (!isGroup) return reply( 'Me obrigue a fazer figuras G-gilson-chan 😔👉👈')
break

case 'edu':
case 'Edu':
case 'EDU':
if (!isGroup) return reply( 'Oin dudu, poderia depositar R$3,000 na minha conta?🥺👉👈')
break

case 'insidu':
case 'Insidu':
case 'INSIDU':
if (!isGroup) return reply( 'Ó o cp mnkkkkkkkk')
break

case 'xavoso':
case 'Xavoso':
case 'XAVOSO':
if (!isGroup) return reply( 'Vamos fuck?💪😏')
break

case 'tada':
case 'Tada':
case 'TADA':
if (!isGroup) return reply( 'Tada não é ghost😙')
break

case 'help':
case 'Help':
case 'menu':
case 'Menu':
textmenu = `        ────────────────
oi ${pushname} use ${prefix}menu caso queira usar meus comandos🧙‍♂️
        ────────────────`
reply(textmenu)
break
}
             
//_COMANDOS
switch(command) {
//_MENU
case 'help':
case 'menu':
case '?':
case 'ajuda':
case 'comandos':
msgFilter.isFiltered(from)
const useLevel = getLevelingLevel(sender)
const useXp = getLevelingXp(sender)
const xingg = getLevelingId(sender)
const useTime = getRegisterTime(sender) 
const requireXp = 20 * Math.pow(useLevel, 2) + 150 * useLevel + 1000
const chec = getLevelingId(sender)
if (useLevel === undefined && chec === undefined) addLevelingId(sender)
uptime = process.uptime()
myMonths = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Desembro"];
myDays = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta' ,'Sábado'];
var tglk = new Date();
var day = tglk.getDate()
bulan = tglk.getMonth()
var thisDay = tglk.getDay(),
thisDay = myDays[thisDay];
var yy = tglk.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
const tanggal = `${thisDay}, ${day} de ${myMonths[bulan]} de ${year}`
const serial = getRegisterSerial(sender)
const idade = getRegisterAge(sender)
const nreg = getRegisterName(sender)
const checATM = checkATMuser(sender)
const users = `${_level.length}`
const chatss = `${totalchat.length}`
const comandost = totalcmd
costum(help(pushname, prefix, temporizador, uptime, hr, tanggal, groupName, users, chatss, prema, checATM, useLevel, useXp, requireXp, patt, comandost ), text, tescuk, cr)
if(useLevel == undefined && useXp == undefined){
reply('Informações com "undefined" indicam que você ainda não se registrou \nUse o comando =registrar')
}
break

case 'm18':
if (!isNsfw) return reply(ptbr.nsfw())
costum(m18(pushname, prefix), text, tescuk, crh)
break

//_TESTES
case 'mz24':
if (!isZ24) return reply('Comando exclusivo z24')
tiringa.sendMessage(from, mz(prefix), text, tescuk, cr)
break

case 'gc':
if (body.endsWith('Tutup')){
  tiringa.groupSettingChange (from, GroupSettingChange.messageSend, true)
}
break
						             
case 'leaderboard':
					case 'lb':
						if (!isGroup) return reply(mess.only.group)
						_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
						mentioned_id = []
						let leaderboard = '-----[ LEADERBOARD ]----\n\n'
						try {
					     for (let i = 0; i < 3; i++) {
								if (i == 0) {
									leaderboard += `${i + 1}º 🥇 : @${_level[i].id.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ XP: ${_level[i].xp}\n│ ➣ Level: ${_level[i].level}\n│ ➣  \n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
								} else if (i == 1) {
									leaderboard += `${i + 1}º 🥈 : @${_level[i].id.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ XP: ${_level[i].xp}\n│ ➣ Level: ${_level[i].level}\n│ ➣  \n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
								} else if (i == 2) {
									leaderboard += `${i + 1}º 🥉 : @${_level[i].id.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ XP: ${_level[i].xp}\n│ ➣ Level: ${_level[i].level}\n│ ➣  \n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
								}
								mentioned_id.push(_level[i].jid)     
							}
							mentions(leaderboard, mentioned_id, true)
						} catch (err) {
							console.log(err)
							tiringa.sendMessage(from, `É necessário que no mínimo 3 pessoas tenham level...`, text, {quoted: mek})
						}
					break

case 'ts':
tiringa.sendMessage(from, bahasa(prefix, sender), text, {
quoted: mek
})
break

//_TESTESS
case 'bugreport':
const bug = body.slice(10)
 if (args.length > 300) return tiringa.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
teks1 = `[REPORT]\nDe: @${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
var options = {
 text: teks1, 
contextInfo: {mentionedJid: [sender]}, 
}
tiringa.sendMessage('553898089360@s.whatsapp.net', options, text, {quoted: mek})
reply("Mensagem enviada ao meu dono; Spam = block + ban.")
break

case 'request':
const pesann = body.slice(8)
if (args.length > 300) return tiringa.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
const teks2 = `[REQUEST]\nDe: @${sender.split("@s.whatsapp.net")[0]}\nMensagem: ${pesann}`
var options = {
text: teks1,
contextInfo: {mentionedJid: [sender]},
}
tiringa.sendMessage('553898089360@s.whatsapp.net', options, text, {quoted: mek})
reply("Mensagem enviada ao meu dono; Spam = block + ban.")
break

case 'simi':
if (args.length < 1) return reply(`Use ${prefix}simi texto`)
try { 
anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(body.slice(5))}`, {method: 'get'})
if (anu.error) return reply('Não sei ler o que não existe 🐤 (converse cmg)')
tiringa.sendMessage(from, `${anu.success} 🐤`, text, {quoted: mek})
} catch {
reply(ptbr.erro)
}
break

case 'prem':
if (isPremium) return reply('Você é um usuário premium!')
else {
reply('Você não é um usuário premium...')
}
break

case 'clima':
case 'tempo':
anu = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=57fcd6384cff4e529b9ca76089f05992&url=https://pt.wttr.in/${args[0]}`)
tiringa.sendMessage(from, anu, image, {quoted: mek})
break

case 'time':
const hott = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const hual = `Horário: ${hott}`
reply(hual)
break

//_GIT DO BOT
case 'git':
mekFilter.addFilter(from)
tiringa.sendMessage(from, `https://github.com/italuH/Tiringa-BOT` , text, {quoted: mek})
break

case 'macumba':
pedido = body.slice(8)
buf = fs.readFileSync(`./src/macu.mp4`)
tiringa.sendMessage(from, buf, video, {quoted: mek})
break

case 'hi':
if (isBanned) return reply('Você está banido')
break

case 'boc':
if (!isOwner) return reply(ptbr.ownerB())
const horatt = moment.tz('America/Sao_Paulo').format('HH:mm')
const horaAtual = `${horatt}`
if (/*horaAtual == '08:42' && */ammOff == "off" && isGroup) {
const aMimirMp3 = fs.readFileSync('./src/acorda.mp3')
const aMimirSt = fs.readFileSync('./src/sonic.webp')
for (let _ of groupMembers) {
tiringa.sendMessage(_.jid, aMimirMp3, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
tiringa.sendMessage(_.jid, aMimirSt, sticker)
}
ammOff = "on"
} else if (/*horaAtual != '08:42' && */ammOff == "on") {
ammOff = "off"
}
break
		
//_ENVIA OS ARQUIVOS .JSON By: Resen 
case 'jsonfiles':
if (!isOwner) return reply(ptbr.ownerB())
const daftarfile = fs.readFileSync('./database/json/daftar.json')
tiringa.sendMessage(from, daftarfile, document, {mimetype: 'json', filename: 'daftar.json'})
break

case 'omais':				
membr = []
const mett = groupMembers
const msdd = groupMembers
const siapssa = mett[Math.floor(Math.random() * mett.length)]
const sipssd = pushname[Math.floor(Math.random() * msdd.length)]
bbebn = `O mais${body.slice(6)} é o(a): @${siapssa.jid.split('@')[0]}`
membr.push(siapssa.jid)
mentions(bbebn, membr, true)
break    

case 'addxp':
if (!isGroup) return reply(ptbr.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Foi adicionado ${args[1]} em xp para @${mentioned[0].split('@')[0]}`
mentions(`${susp}`, mentioned, true)
addLevelingXp(pru, Number(args[1]))                     
break

case 'timer':
if (args[1]=="segundo") {var timer = args[0]+"000"
} else if (args[1]=="minuto") {var timer = args[0]+"0000"
} else if (args[1]=="hora") {var timer = args[0]+"00000"
} else {return reply("Escolher entre: \nsegundo\nminuto\nhora\n\nExemplo: =timer 30 segundo")}
setTimeout( () => {
reply("O tempo acabou")
}, timer)
break

case 'addprem':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
prem.push(`${mentioned}`)
fs.writeFileSync('./datauser/premium.json', JSON.stringify(prem))
susp = `👑@${mentioned[0].split('@')[0]} foi adicionado à lista de usuários premium com sucesso👑`
mentions(`${susp}`, mentioned, true)   
break

case 'dellprem':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
delp = prem.indexOf(oh)
prem.splice(`${mentioned}`)
fs.writeFileSync('./datauser/premium.json', JSON.stringify(prem))
susp = `✖@${mentioned[0].split('@')[0]} foi removido da lista de usuários premium✖`
mentions(`${susp}`, mentioned, true)   
break

case 'ban':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unban':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return  reply(ptbr.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break

case 'send':
var pc = body.slice(6)
var nomor = pc.split("|")[0];
var pesan = pc.split("|")[1];
tiringa.sendMessage(nomor+'@s.whatsapp.net', pesan, text)
break

case 'ttp':
msgFilter.isFiltered(from)
if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}ttp Toin gado`)
attp2 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(body.slice(4))}`)
tiringa.sendMessage(from, attp2, sticker, {quoted: mek})
break

case 'attp':
if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}attp Toin gado`)
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(5))}`)
tiringa.sendMessage(from, attp2, sticker, {quoted: mek})
break

case 'pão':
if (isOwner) return reply('Oi Italu')
else {
reply('Oi membro comum')
}
break 

//_LEVEL ATUAL
case 'level':
msgFilter.isFiltered(from)
if (!isGroup) return reply(ptbr.group())
if (!isLevelingOn) return reply(ptbr.levelnoton())
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
const userTime = getRegisterTime(sender) 
if (userLevel === undefined && userXp === undefined) return reply(ptbr.levelnol())
const requiredXp = 20 * Math.pow(userLevel, 2) + 150 * userLevel + 1000
levela =
`  ════❖ LEVEL ❖════

╭╼╾╼╾╼╾╼╾╼╾╼╾╼
│‣ Nome: @${sender.split("@")[0]}
├╼╾╼╾╼╾╼╾╼╾╼╾╼
│‣ XP: ${userXp}/${requiredXp}
├╼╾╼╾╼╾╼╾╼╾╼╾╼
│‣ Level: ${userLevel}
├╼╾╼╾╼╾╼╾╼╾╼╾╼
│‣ Patente: ${patt}
╰╼╾╼╾╼╾╼╾╼╾╼╾╼

  ════❖ LEVEL ❖════`     
tiringa.sendMessage(from, levela, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break
  
//_ENVIA O VCARD DO DONO
case 'criador':
case 'vcard':
case 'owner':
case 'italu':
case 'italo':
await tiringa.sendMessage(from, {displayname: "Italu🧙‍♂️", vcard: vcard}, MessageType.contact)
break
                     
case 'ownergrup':
case 'ownergroup':
tiringa.updatePresence(from, Presence.composing) 
options = {
text: `Dono do grupo: @${from.split("-")[0]}`,
contextInfo: { mentionedJid: [from]}}
tiringa.sendMessage(from, options, text, { quoted: mek } )
break
		
//const gy =['0','5','10','15','20','25','30','35','40','45','50','55','60','65','70','75','80','85','90','95','100']

case 'testime':
setTimeout( () => {
tiringa.sendMessage(from, 'O tempo acabou', text) 
}, 10000)
setTimeout( () => {
tiringa.sendMessage(from, '5 segundos restantes', text)
}, 5000)
setTimeout( () => {
tiringa.sendMessage(from, '10 segundos restantes', text)
}, 0)
break

case 'gimage':
case 'googleimage':
try {
if (!isNsfw) return reply(ptbr.nsfw())
if (args.length < 1) return reply('Digite o que deseja buscar')
reply(ptbr.wait())
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('Ocorreu um erro')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `Aqui está sua pesuisa sobre: ${teks}`})
}
}
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'gatinho':
msgFilter.isFiltered(from)
reply(ptbr.wait())
try {
axios.get(`https://nekos.life/api/v2/img/meow`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
tiringa.sendMessage(from, buf, image, {quoted: mek,caption: "🐱"})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'dog':
try {
msgFilter.isFiltered(from)
reply(ptbr.wait())
res = axios.get(`https://nekos.life/api/v2/img/woof`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'kill2':
if (!isOwner) return reply(ptbr.ownerB())
pm2 = `pm2 kill`
reply('A mimir...')
exec(pm2, (err, stdout) => {
if(err) return tiringa.sendMessage(from, "Erro", text, {quoted: mek})
if (stdout) {
tiringa.sendMessage(from, stdout, text, {quoted: mek})
} 
})
break

case 'reiniciar':
if (!isOwner) return reply(ptbr.ownerB())
npm = `npm start`
reply('Reiniciando em alguns segundos...')       
exec(npm, (err, stdout) => {
if(err) return tiringa.sendMessage(from, "Erro", text, {quoted: mek})
if (stdout) {
tiringa.sendMessage(from, stdout, text, {quoted: mek})
} 
})
break

case 'exe':
tiringa.updatePresence(from, Presence.composing) 
if (!isOwner) return reply(ptbr.ownerB())
const cmd = body.slice(4)
exec(cmd, (err, stdout) => {
if(err) return tiringa.sendMessage(from, "Comando inexistente", text, {quoted: mek})
if (stdout) {
tiringa.sendMessage(from, stdout, text, {quoted: mek})
}
})
break
 
//_CONTADOR DE LETRAS
case 'contar':
msgFilter.isFiltered(from)
if (args.length == 0) return reply( '0 caracteres, pois obviamente não há texto😀')
const count = body.slice(8).length
if (count === 1) {
reply(`O texto possui ${count} caractere.`)
} else if (count > 1) {
reply(`O texto possui ${count} caracteres.`)
}
break

case 'igstory': 
anu = await fetchJson(`https://api.zeks.xyz/api/igs?apikey=apivinz&username=${body.slice(9)}`, {method: 'get'})
teks = '𝗜𝗚 𝗦𝗧𝗢𝗥𝗬\n'
for (let i of anu.data) {
teks += `Username : ${anu.username}
Total story : ${anu.stories_count}
Tipe : ${i.type}
Story : ${i.url}
Swipe Up Link : ${i.swipeUpLink}\n\n𝗜𝗚 𝗦𝗧𝗢𝗥𝗬\n`
}
reply(teks.trim())
break

case 'mediafire': 
anu = await fetchJson(`https://api.zeks.xyz/api/mediafire?apikey=apivinz&url=${args[0]}`, {method: 'get'})
buffer = await getBuffer(anu.download)
teks = `Nama File : ${anu.name_file}
File Size : ${anu.file_size}
Tanggal Upload : ${anu.upload_date}
File Tipe : ${anu.file_type}
Link Download : ${anu.download}
Deskripsi : ${anu.description}`
tiringa.sendMessage(from, teks, text, {quoted: mek})
costum(buffer, MessageType.document)
break

case 'playstore': 
anu = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=apivinz&q=${body.slice(11)}`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/znvZ20B/9b667c9d4b1b.jpg`)
tiringa.sendMessage(from, buffer, image, {quoted: mek})
teks = '𝗣𝗹𝗮𝘆 𝘀𝘁𝗼𝗿𝗲\n'
for (let i of anu.result) {
teks = `Nama Apk : ${i.title}
App ID : ${i.appid}
Developer : ${i.developer}
Price : ${i.price}
Rate : ${i.rating}
Url Apk : ${i.url}
𝗣𝗹𝗮𝘆 𝘀𝘁𝗼𝗿𝗲
`
}
reply(teks.trim())
break

case 'searchsticker': 
case 'searchstiker': 
ranp = getRandom('.png')
rano = getRandom('.webp')
anu = await fetchJson(`https://api.zeks.xyz/api/searchsticker?apikey=apivinz&q=${body.slice(14)}`, {method: 'get'})
buffer = await getBuffer(anu.thumb)
teks = `Nama Sticker : ${anu.title}`
dung = (anu.sticker)
tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
var tes2 =  dung[Math.floor(Math.random() * dung.length)];
exec(`wget ${tes2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec adminwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
if (err) return reply('Error cok')
fs.unlinkSync(ranp)
buffer2 = fs.readFileSync(rano)
costum(buffer2, sticker, tescuk, `Judul Sticker : ${anu.title}`)
fs.unlinkSync(rano)
})
break

case 'igstalk': 
anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?apikey=apivinz&username=${body.slice(9)}`, {method: 'get'})
buffer = await getBuffer(anu.profile_pic)
teks = `Username : ${anu.username}
Fullname : ${anu.fullname}
Follower : ${anu.follower}
Following : ${anu.following}
Verified : ${anu.is_verified}
Bussiness : ${anu.is_bussiness}
Private : ${anu.is_private}
Link : https://www.instagram.com/${anu.username}
Bio : ${anu.bio}`
tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
break

case 'shopee': 
anu = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=apivinz&q=${body.slice(9)}`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/yFZgntN/f9ab826750ea.jpg`)
teks = '𝗦𝗛𝗢𝗣𝗘𝗘\n'
for (let i of anu.data) {
teks += `Nama barang : ${i.name}
HMrG : ${i.hMrG}
Terjual : ${i.terjual}
Lokasi : ${i.location}
Cover : ${i.cover}
Stock : ${i.stock}
Informasi : ${i.information}
Url : ${i.url}
Deskripsi : ${i.desc}\n\n𝗦𝗛𝗢𝗣𝗘𝗘
`
}
tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: teks.trim()})
break

case 'ytsearch': 
anu = await fetchJson(`https://api.zeks.xyz/api/yts?q=${body.slice(10)}&apikey=apivinz`, {method: 'get'})
buffer = await getBuffer(`https://i.ibb.co/XyS1DLw/cdfbdf66f07b.jpg`)
teks = '𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Uploader : 
Nama Channel : ${i.uploader.username}
Url Channel : ${i.uploader.url}
Verified : ${i.uploader.verified}
Video :
Nama Video : ${i.video.title}
Url : ${i.video.url}
Durasi : ${i.video.duration}
Deskripsi : ${i.video.snippet}
Tanggal Upload : ${i.video.upload_date}
Views : ${i.video.views}\n\n𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝘀𝗲𝗮𝗿𝗰𝗵
`
}
tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: teks.trim()})
break

case 'neonime': 
anu = await fetchJson(`https://api.zeks.xyz/api/neonimesearch?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
teks = '𝗡𝗲𝗼𝗻𝗶𝗺𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Nama Neonime : ${i.title}
Link : ${i.link}
Deskripsi : ${i.desc}\n\n𝗡𝗲𝗼𝗻𝗶𝗺𝗲 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break

case 'apkpure': 
reply(ptbr.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
teks = '𝗔𝗽𝗸 𝗣𝘂𝗿𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Nama Apk : ${i.title}
Url : ${i.url}
Rating : ${i.rating}\n\n𝗔𝗽𝗸 𝗣𝘂𝗿𝗲 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break

case 'igsearch': 
reply(ptbr.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=apivinz&q=${body.slice(8)}`, {method: 'get'})
teks = '𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Username : ${i.username}
Private : ${i.private_user}
Verified : ${i.verified_user}
Link : https://www.instagram.com/${i.username}\n\n𝗜𝗻𝘀𝘁a𝗴𝗿𝗮𝗺 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break

case 'happymod': 
reply(ptbr.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/happymod?apikey=apivinz&q=${body.slice(10)}`, {method: 'get'})
teks = '𝗛𝗮𝗽𝗽𝘆 𝗺𝗼𝗱 𝗦𝗲𝗮𝗿𝗰𝗵\n'
for (let i of anu.result) {
teks += `Nama Apk : ${i.title}
Rating : ${i.rating}
Url : ${i.url}\n\n𝗛𝗮𝗽𝗽𝘆 𝗺𝗼𝗱 𝗦𝗲𝗮𝗿𝗰𝗵
`
}
reply(teks.trim())
break
					
case 'togif': // by lindow
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await tiringa.downloadAndSaveMediaMessage(encmediaaa)
reply(ptbr.wait())
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
tiringa.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
fs.unlinkSync(mediaaa)
}
break

case 'shutdown':
if (!isOwner) return reply(ptbr.ownerB())
reply('Desligando em 3 segundos....') 
setTimeout( () => {
tiringa.close() }, 3000)
break

//_NULIS
case 'nulis':
if (args.length < 1) return reply(`Use o comando da seguinte forma: ${prefix}nulis (texto)`)
teks = body.slice(7)
reply(ptbr.wait())
anu = await fetchJson(`https://tools.zone-xsec.com/api/nulis.php?q=${teks}`, {method: 'get'})
if (anu.error) return reply(anu.error)
buff = await getBuffer(anu.image)
tiringa.sendMessage(from, buff, image, {quoted: mek, caption: '✏📕'})
break

//_INFORMAÇÕES DO USUÁRIO
case 'infome':
case 'perfil':
msgFilter.isFiltered(from)
const usLevel = getLevelingLevel(sender)
const usXp = getLevelingXp(sender)
const usTime = getRegisterTime(sender) 
const serh = getRegisterSerial(sender)
const idad = getRegisterAge(sender)
const regin = getRegisterName(sender)
const requirXp = 500 * (Math.pow(2, usLevel) - 1)
try {
ppimg = await tiringa.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const pf = 
`
  ‣ Nome: @${sender.split("@")[0]}
  ‣ Registrado: ✅
  ‣ Idade: ${idad}
  ‣ Nome de registro: ${regin}
  ‣ Registrado desde: ${usTime}
  ‣ Level: ${usLevel}
  ‣ XP: ${usXp}/${requirXp}
  ‣ Patente: ${patt}
  ‣ link: wa.me/${sender.split("@")[0]}
  ‣ Código: ${serh}
`
its = await getBuffer (ppimg)
tiringa.sendMessage(from, its, image, {quoted: mek, caption: pf, contextInfo: {mentionedJid: [sender]}})
if(usLevel == undefined && usXp == undefined && usTime == undefined && serh == undefined) {
reply('Informações com "undefined" indicam que você ainda não se registrou \nUse o comando =registrar')
}
break

//_EFEITO REVERSE PARA VIDEO  
case 'reversevid':
if (!isQuotedVideo) return reply('Marque um vídeo')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await tiringa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
tiringa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
		
//_EFEITO FAST PARA VIDEO  
case 'fastvid':
if (!isQuotedVideo) return reply('Marque um vídeo')
reply(ptbr.wait())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await tiringa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
tiringa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})		
break
		
//_EFEITO SLOW PARA VIDEO  
case 'slowvid':
if (!isQuotedVideo) return fakegroup('Marque um vídeo')
reply(ptbr.wait())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await tiringa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return fakegroup(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
tiringa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break

//_EFEITO NIGHTCORE PARA AUDIO         
case 'nightcore':
if (!isQuotedAudio) return reply('Marque um áudio')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await tiringa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break   

//_EFEITO SLOW PARA AUDIO
case 'slow':
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque um áudio')
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await tiringa.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFEITO ESQUILO PARA AUDIO
case 'esquilo':
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque um áudio')
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await tiringa.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFDEITO GIGANTE PARA AUDIO	
case 'gemuk':
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque um áudio')
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await tiringa.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO RÁPIDO
case 'fast':
if (!isQuotedAudio) return reply('Marque um áudio')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await tiringa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_AUMENTA O BASS DE UM AUDIO	
case 'bass':                 
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque um áudio')
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await tiringa.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO ESTOURADO		
case 'earrape':         
case 'estourar':       
msgFilter.isFiltered(from)
if (!isQuotedAudio) return reply('Marque um áudio')
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await tiringa.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
tiringa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_INFORMAÇÕES DO BOT		
case 'info':
msgFilter.isFiltered(from)
me = tiringa.user
uptime = process.uptime()
inf =
 `‣ Nome do bot: ${me.name}
  ‣ Número do bot: @${me.jid.split('@')[0]}
  ‣ Dono: Italu
  ‣ Prefix: ${prefix}
  ‣ O bot está ativo há: ${temporizador(uptime)}
  ‣ Total de usuários: ${_registered.length} usuários
  ‣ Total chats: ${totalchat.length}`
buffer = await getBuffer(me.imgUrl)
tiringa.sendMessage(from, buffer, image, {caption: inf, contextInfo: {mentionedJid: [me]}})
break

//_INFORMAÇÕES DO GRUPO
case 'infogp':
case 'infogc':
case 'groupinfo':
case 'infogrup':
case 'grupinfo':
msgFilter.isFiltered(from)
tiringa.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
let { owner, creation, participants, desc } = groupMetadata;
const creationTime = moment.unix(creation);
try {
ppUrl = await tiringa.getProfilePicture(from)
} catch {
ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppUrl)
infogp = 
` 
  ‣Nome: ${groupName}
  ‣Quantidade de membros: ${groupMembers.length}
  ‣Total de administradores: ${groupAdmins.length}
  ‣Criador : @${owner.split('@')[0]}
  ‣Total de membros: ${participants.length} membros
  ‣Descrição:
  ${desc ? desc : ''}`
await tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: infogp, contextInfo: {mentionedJid: [owner.split]}})
break

//_TEMPO DE RESPOSTA DO BOT		
case 'ping':
case 'speed':
msgFilter.isFiltered(from)
const timestamp = speed();
const latensi = speed() - timestamp
tiringa.updatePresence(from, Presence.composing)
uptime = process.uptime()
tiringa.sendMessage(from, `Pong!\nTempo de resposta: ${latensi.toFixed(4)} segundos\n`, text, {quoted: mek})
break

//_BUSCA IMAGEM NO PINTEREST		
case 'img':
case 'image':
case 'imagem':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('Digite o comando juntamente com o que você deseja buscar')
tiringa.updatePresence(from, Presence.composing)
reply(ptbr.wait())
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${args}`, {method: 'get'})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
tiringa.sendMessage(from, pok, image, {quoted: mek, caption: `Achei isso sobre: ${args}`})
} catch {
reply(`Não econtrei nada sobre ${agrs}...`)
}
break

//_LISTAR USUÁRIO ONLINE
case 'online':
msgFilter.isFiltered(from)
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(tiringa.chats.get(ido).presences), tiringa.user.jid]
tiringa.sendMessage(from, 'Lista de usuários online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
contextInfo: { mentionedJid: online }
})
break

//_NEKOS PINTEREST
case 'neko':
msgFilter.isFiltered(from)
tiringa.updatePresence(from, Presence.composing)
uk = ["anime neko"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
tiringa.sendMessage(from, pok, image, {
quoted: mek, caption: `nyan`
})
} catch {
reply(ptbr.erro())
}
break

//_LOLIS PINTEREST
case 'loli':
msgFilter.isFiltered(from)
tiringa.updatePresence(from, Presence.composing)
uk = ["anime loli"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
tiringa.sendMessage(from, pok, image, {
quoted: mek, caption: `nii?`
})
} catch {
reply(ptbr.erro())
}
break

//_SHITPOST PINTEREST
case 'shitpost':
case 'shit':
msgFilter.isFiltered(from)
tiringa.updatePresence(from, Presence.composing)
uk = ["shitpost br"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
tiringa.sendMessage(from, pok, image, {
quoted: mek, caption: `إذا قمت بترجمة هذا فأنت سارق🤣👆`
})
} catch {
reply(ptbr.erro())
}
break

//_ANIME PINTEREST
case 'anime':
msgFilter.isFiltered(from)
tiringa.updatePresence(from, Presence.composing)
am = ["anime tumblr",
"wallpaper anime hd",
"anime aestethic",
"anime hd"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
tiringa.sendMessage(from, pok, image, {
quoted: mek, caption: `💮`
})
break

//_PROCURA WALLPAPER NO PINTEREST
case 'wp':
case 'wallpaper':
msgFilter.isFiltered(from)
tiringa.updatePresence(from, Presence.composing)
pw = ["wallpaper aestethic",
"wallpaper tumblr",
"wallpaper lucu",
"wallpaper"]
nk = pw[Math.floor(Math.random() * pw.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
reply(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
tiringa.sendMessage(from, pok, image, {
quoted: mek, caption: `Gostou do que escolhi?`
})
} catch {
reply(ptbr.erro())
}
break

case 'nomeninja':
msgFilter.isFiltered(from)
  if (args.length < 1) return reply('escreva seu nome')
tiringa.updatePresence(from, Presence.composing)
nome = body.slice(10)
try {
data = await fetchJson(`https://api.terhambar.com/ninja?nama=${nome}`)
hasil = `Seu nome de ninja:\n\n${data.result.ninja}`
reply(hasil)
} catch {
  reply(ptbr.erro())
}
break

case 'nsfw':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
//if (!isOwner) return reply(ptbr.ownerB())
if (args.length < 1) return reply(`Digite ${prefix}nsfw 1 para ativar`)
if (Number(args[0]) === 1) {
if (isNsfw) return reply('❎o NSFW já está ativo no grupo❎')
nsfw.push(from)
fs.writeFileSync('./data/nsfw.json', JSON.stringify(nsfw))
reply('✅funções NSFW ativadas nesse grupo✅')
} else if (Number(args[0]) === 0) {
nsfw.splice(from, 1)
fs.writeFileSync('./data/nsfw.json', JSON.stringify(nsfw))
reply('🚫funções NSFW desativadas nesse grupo🚫')
} else {
reply(`Digite ${prefix}nsfw 1 para ativar, 0 para desativar o recurso`)
}
break
                   
case 'leveis':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}leveis 1, para ativar e 0 para desativar`)
if (Number(args[0]) === 1) {
if (isLevelingOn) return reply('❎a função LEVEIS já está ativada no grupo❎')
_leveling.push(from)
fs.writeFileSync('./data/leveling.json', JSON.stringify(_leveling))
reply('✅a função LEVEIS foi ativada✅')
} else if (Number(args[0]) === 0) {
_leveling.splice(from, 1)
fs.writeFileSync('./datauser/leveling.json', JSON.stringify(_leveling))
reply('❌a função LEVEIS foi desativada❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix}leveis 1, para ativar e 0 para desativar`)
}
break

case 'setppgc':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
const ftgp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
const medipp = await tiringa.downloadAndSaveMediaMessage(ftgp)
await tiringa.updateProfilePicture (from, medipp)
reply('✅foto do grupo alterada✅')
break

case 'triggered':
case 'ger':
msgFilter.isFiltered(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply(ptbr.waitimg())
owgi = await tiringa.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(ptbr.stick())
nobg = fs.readFileSync(rano)
tiringa.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})                               
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'tourl':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply(ptbr.wait())
owgi = await tiringa.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imurl = `${anu.display_url}`
reply(imurl)
}
break

case 'wasted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(ptbr.waitimg())
owgi = await tiringa.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imgwas = `${anu.display_url}`
hehe = await getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${imgwas}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
} else {
reply('Você precisa marcar ou enviar uma imagem')
}
break

case 'drawing':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(ptbr.waitimg())
owgi = await tiringa.downloadAndSaveMediaMessage(ted)
tels = body.slice(7)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
} else {
reply('Você precisa marcar ou enviar uma imagem')
}
break

case 'wanted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
if (args.length < 1) return reply(`Digite algum texto para isso`)
wtext = body.slice(7)
reply(ptbr.waitimg())
owgi = await tiringa.downloadAndSaveMediaMessage(ted)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=${wtext}&text2=10000`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
} else {
reply('Você precisa marcar ou enviar uma imagem')
}
break

case '8bit':
msgFilter.isFiltered(from)
if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}8bit texto1|texto2`)
reply(ptbr.waitimg())
pc = body.slice(5)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
hehe = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${tx1}&text2=${tx2}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'bneon':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(6)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break
		
case 'luzneon':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(8)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'matrix':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(7)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'breakwall':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(10)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'dropwater':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(10)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/dropwater?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'wolflogo':
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}wolflogo texto1|texto2`)
if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}wolflogo texto1|texto2\nNão esqueça do: | `)
pc = body.slice(9)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${tx1}&text2=${tx2}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break
		
///_photoOXY
case 'flowertext':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(11)
reply(ptbr.waitimg())
hehe = fetchJson(`https://api.zeks.xyz/api/flowertext?text=${pc}&apikey=apivinz`)
heh = await getBuffer(hehe.result)
tiringa.sendMessage(from, heh, image, {quoted:mek})
break
///_photoOXY

case 'lovepaper':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(10)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://videfikri.com/api/textmaker/lovemek/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'tfire':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(6)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'sandw':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(6)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'firofiro':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(9)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/epep?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'text3d2':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(8)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'text3d':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(7)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/text3d?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'phlogo':
if (args.length < 1) return reply('digite algum texto para isso')
if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}phlogo texto1|texto2\nNão esqueça do: | `)
pc = body.slice(7)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${tx1}&text2=${tx2}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'bpmek':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(6)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/logobp?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'folhas':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(7)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'tlight':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(7)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${pc}&apikey=apivinz`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break


case 'narutobanner':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(14)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'romancetext':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(12)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'shadowtext':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(11)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'tiktokeffect':
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}tiktokeffect texto1|texto2`)
if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}tiktokeffect texto1|texto2`)
pc = body.slice(13)
nomor = pc.split("|")[0];
pesan = pc.split("|")[1];
if (nomor.length >= 9 ) return reply(`Texto 1 máximo 9 carateres`)
if (pesan.length >= 35 ) return reply(`Texto 2 máximo 35 carateres`)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${nomor}&text2=${pesan}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'neon':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(5)
if (pc.length >= 80 ) return reply(`Máximo 80 carateres`)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'hpotter':
if (args.length < 1) return reply('digite algum texto para isso')
pc = body.slice(8)
reply(ptbr.waitimg())
hehe = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${pc}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'cep':
if (args.length < 1) return reply('digite o cep que deseja buscar')
cep = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${cep}`)
if (hehe.error) return reply(hehe.error)
ccg =
` INFORMAÇÕES DO CEP
  ‣ Cep: ${hehe.cep}
  ‣ Estado: ${hehe.state}
  ‣ Cidade: ${hehe.city}`
tiringa.sendMessage(from, ccg, text, {quoted:mek})
break

case 'ddd':
if (args.length < 1) return reply('digite o ddd que deseja buscar')
ddd = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
if (hehe.error) return reply(hehe.error)
ccg =
` INFORMAÇÕES DO DDD
  ‣ Estado: ${hehe.state}
  ‣ Cidades: 
    ${hehe.cities}\n`
tiringa.sendMessage(from, ccg, text, {quoted:mek})
break

case 'cartão':
case 'cartao':
hehe = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
if (hehe.error) return reply(hehe.error)
ccg =
` Cartão gerado com sucesso
   ‣ Bandeira: ${hehe.result.card.network}
   ‣ Número: ${hehe.result.card.number}
   ‣ Cvv: ${hehe.result.card.cvv}
   ‣ Pin: ${hehe.result.card.pin}
   ‣ Balanço: ${hehe.result.card.balance}
   ‣ Validade: ${hehe.result.card.expiration_month}/${hehe.result.card.expiration_year}`
tiringa.sendMessage(from, ccg, text, {quoted:mek})
break

case 'neve':
try {  
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}neve texto1|texto2`)
if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}neve texto1|texto2`)
pc = body.slice(5)
  tx1 = pc.split("|")[0];
  tx2 = pc.split("|")[1];
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/snowwrite?text1=${tx1}&text2=${tx2}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'crismes':
try {  
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}crismes texto`)
pc = body.slice(8)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/crismes?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'pubglogo':
try {  
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}retro texto1|texto2|texto3`)
pc = body.slice(9)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/pubglogo?text1=${tx1}&text2=${tx2}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'bf4':
try {  
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}retro texto1|texto2|texto3`)
pc = body.slice(4)
tx1 = pc.split("|")[0];
tx2 = pc.split("|")[1];
reply(ptbr.waitimg())
haha = await getBuffer(`https://videfikri.com/api/textmaker/bf4/?text1=${tx1}&text2=${tx2}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'nezuko':
msgFilter.isFiltered(from)
try {
hah = await fetchJson(`https://kagchi-api.glitch.me//waifu/nezuko`)
hehe = await getBuffer(hah.url)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'cslogo':
try {  
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}cslogo texto`)
pc = body.slice(6)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/cslogo?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'lithgtext':
try {  
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}lithgtext texto`)
pc = body.slice(10)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/lithgtext?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'silktext':
try {  
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}silktext texto`)
pc = body.slice(9)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/silktext?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'flametext':
try {  
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}flametext texto`)
pc = body.slice(10)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/flametext?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌')
}
break

case 'glowtext':
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}glowtext texto`)
pc = body.slice(9)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/glowtext?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
break

case 'crosslogo':
try {  
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}crosslogo texto`)
pc = body.slice(10)
reply(ptbr.waitimg())
haha = await fetchJson(`https://api.zeks.xyz/api/crosslogo?text=${pc}&apikey=apivinz`)
hehe = await getBuffer(haha.result)
setTimeout( () => {
tiringa.sendMessage(from, hehe, image, {quoted:mek})
}, 10000)
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'gtav':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(ptbr.wait())
owgi = await tiringa.downloadAndSaveMediaMessage(ted)
tels = body.slice(7)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
} else {
reply('Você precisa marcar ou enviar uma imagem')
}
break

case 'wa.me':
case 'wame':
tiringa.updatePresence(from, Presence.composing)
options = {
text: `Seu link wa.me: wa.me/${sender.split("@s.whatsapp.net")[0]}\nOu: \napi.whatsapp.com/send?phone=${sender.split("@")[0]}`,
contextInfo: {
mentionedJid: [sender]
}
}
tiringa.sendMessage(from, options, text, {
quoted: mek
})
break

case 'notif':
if (!isGroupAdmins) return reply(ptbr.admin())
tiringa.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if(args.length < 1) return tiringa.reply('escreva algo como aviso')
aviso  = `Aviso de: @${sender.split("@")[0]}\n\nAviso: ${body.slice(7)}`
group = await tiringa.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: aviso,
contextInfo: {
mentionedJid: jids
},
quoted: mek
}
await tiringa.sendMessage(from, options, text)
break

//_TE MENCIONA
case 'tagme':
const tagme = {
text: `@${sender.split("@")[0]} 🧙‍♂️`,
contextInfo: {mentionedJid: [sender]
}
}
tiringa.sendMessage(from, tagme, text)
break

case 'play':
msgFilter.isFiltered(from)
if (args.length < 1) return reply('Digite o nome da música')
play = body.slice(5)
reply('Procurando sua música...⏳')
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?apikey=apivinz&q=${play}`)
if (anu.message) return reply('Música não encontrada...\nTente específicar o nome dela.')
//aanu = await fetchJson(`https://api-tiringa.italuh.repl.co/api/yta?url=${anu.result.source}`)
aanu = await fetchJson(`https://api-exteam.herokuapp.com/api/yt/playmp3?query=${play}&apikey=estreia`)
infomp3 = 
`    MÚSICA ENCONTRADA
‣ Título: ${anu.result.title}
‣ Fonte: ${anu.result.source}`
buffer = await getBuffer(anu.result.thumbnail)
//lagu = await getBuffer(anu.result.url_audio)
lagu = await getBuffer(aanu.url)
setTimeout( () => {
tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
}, 1500)
reply('Baixando e enviando sua música...')
tiringa.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
break

case 'ytsearch':
if (args.length < 1) return reply('Digite o que deseja procurar')
reply('Procurando...')
play = body.slice(9)
try {
anu = await fetchJson(`https://videfikri.com/api/ytplay/?query=${play}`)
if (anu.error) return reply(anu.error)
infomp3 = 
`    MÚSICA ENCONTRADA
   ‣ Título: ${anu.result.title}
   ‣ Fonte: ${anu.result.source}
   ‣ Canal: ${anu.result.channel}
   ‣ link: ${anu.result.url} 
   ‣ Duração: ${anu.result.duration}
   ‣ Tamanho: ${anu.result.size}
`
buffer = await getBuffer(anu.result.thumbnail)
lagu = await getBuffer(anu.result.url)
tiringa.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
})
} catch {
reply(ptbr.erro())
}
break

case 'dadosfake':
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
dadosf = 
`    DADOS GERADOS
   ‣ Nome: ${anu.nome}
   ‣ Sexo: ${anu.gender}
   ‣ Idade: ${anu.age}
   ‣ Telefone: ${anu.phone}
   ‣ Tipo sanguíneo: ${anu.blood_type}
   ‣ E-mail: ${anu.email}
   ‣ Senha: ${anu.password}
   ‣ CEP: ${anu.zip_code}`
tiringa.sendMessage(from, dadosf, text, {quoted: mek})
break

case 'ytmp3':
msgFilter.isFiltered(from)
reply(ptbr.wait())
play = body.slice(7)
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Esse link não é do YouTube')
try {
anu = await fetchJson(`https://api-tiringa.italuh.repl.co/api/yta?url=${play}`)
infomp3 = `INFORMAÇÕES DO ÁUDIO\n‣ Título: ${anu.result.title}\n‣ Fonte: ${anu.result.source}\n‣ Tamanho: ${anu.result.size}\nlink: ${anu.result.link}`
buffer = await getBuffer(anu.result.thumb)
lagu = await getBuffer(anu.result.link)
tiringa.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
})
tiringa.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek
})
} catch {
reply(ptbr.erro())
}
break

case 'ytmp4':
msgFilter.isFiltered(from)
reply(ptbr.wait())
play = body.slice(6)
try {
anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${play}&apikey=apivinz`)
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Esse link não é do YouTube')
if (anu.error) return reply(anu.error)
infomp3 = `INFORMAÇÕES DO VÍDEO\n‣ Título: ${anu.result.title}\n‣ Fonte: ${anu.result.source}\n‣ Tamanho: ${anu.result.size}\nlink: ${anu.result.url_video}`
buffer = await getBuffer(anu.result.thumbnail)
lagu = await getBuffer(anu.result.url_video)
tiringa.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
})
tiringa.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek
}) 
} catch {
reply(ptbr.erro())
}
break

//_CAPTURA O TEXTO NA IMAGEM
case 'ocr':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const ocrt = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const com = await tiringa.downloadAndSaveMediaMessage(ocrt)
reply(ptbr.wait())
await recognize(com, {lang: 'eng+ind', oem: 1, psm: 3})
.then(oc => {
reply(oc.trim())
fs.unlinkSync(com)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(com)
})
} else {
reply(`Marque ou envie uma imagem com ${prefix}ocr para capturar o texto da imagem`)
}
break

//_CRIAÇÃO DE STICKERS
case 's':
case 'stiker':
case 'sticker':
case 'stickergif':
case 'stikergif':
case 'fig':
case 'gif':
case 'figura':
case 'figu':
case 'figurinha':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await tiringa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(ptbr.stick())
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata('Tiringa-BOT', 'Italu')} ${ran} -o ${ran}`, async (error) => {
if (error) return reply(ptbr.stick())
tiringa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)	
fs.unlinkSync(ran)	
 })
 })
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await tiringa.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply(ptbr.wait())
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`A conversão de ${tipe} para o sticker falhou`)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata('Tiringa-BOT', 'Italu')} ${ran} -o ${ran}`, async (error) => {
if (error) return reply(ptbr.stick())
tiringa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
//.addOutputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 512x512"])
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await tiringa.downloadAndSaveMediaMessage(encmedia)
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(ptbr.waitgif())
keyrmbg = 'sfFSzxRz7y6jYDwfxx47rCgz'
await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('ocorreu um erro')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(ptbr.stick())
exec(`webpmux -set exif ${addMetadata('Tiringa-BOT', 'Italu')} ${ranw} -o ${ranw}`, async (error) => {
if (error) return reply(ptbr.stick())
tiringa.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
fs.unlinkSync(ranw)
})
})
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'st':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await tiringa.downloadAndSaveMediaMessage(encmedia)                                     
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('Tiringa-BOT', 'Italu')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(ptbr.stick())
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
tiringa.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await tiringa.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply(ptbr.waitgif())
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('Tiringa-BOT', 'Italu')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
tiringa.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

//_CONVERTE VÍDEO EM ÁUDIO
case 'tomp3':
tiringa.updatePresence(from,
Presence.composing)
if (!isQuotedVideo) return reply(`Marque um vídeo com ${prefix}tomp3`)
reply(ptbr.wait())
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await tiringa.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
fs.unlinkSync(duh)
if (err) return reply('❌falha ao converter video para mp3❌')
buffer = fs.readFileSync(ran)
tiringa.sendMessage(from, buffer, audio, {
mimetype: 'audio/mp4', quoted: mek
})
fs.unlinkSync(ran)
})
break

//_VOZ DO GOOGLE
case 'tts':
if (args.length < 1) return tiringa.sendMessage(from, `Você deve usar o comando da forma correta:\n${prefix}tts (língua) (texto)\nExemplo: ${prefix}tts pt bom dia\n\nUse: ${prefix}ts para listar todas as línguas`, text, {quoted: mek})
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return tiringa.sendMessage(from, 'Cadê o texto?', text, {quoted: mek})
dtt = body.slice(8)
ranm = getRandom('.mp3')
dtt.length > 800
? reply('Texto muito grande')
: gtts.save(ranm, dtt, function() {
tiringa.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
fs.unlinkSync(ranm)
})
break

//_ALTERA O PREFIX
case 'setprefix':
if (args.length < 1) return
if (!isOwner) return reply(ptbr.ownerB())
prefix = body.slice(10)
up.prefix = prefix
fs.writeFileSync('./data/settings.json', JSON.stringify(up, null, '\t'))
reply(`O prefix foi alterado para: ${prefix}`)
break

//_BLOQUEIA O USUÁRIO
case 'block':
tiringa.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return reply(ptbr.ownerB())
tiringa.blockUser (`${body.slice(8)}@c.us`, "add")
tiringa.sendMessage(from, `Memblokir nomor, Perintah Diterima`, text, {
quoted: mek
})
break

//_DESBLOQUEIA USUÁRIO BLOQUEADO
case 'unblock':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return reply(ptbr.ownerB())
tiringa.blockUser (`${body.slice(9)}@c.us`, "remove")
tiringa.sendMessage(from, `Membuka blokir, Perintah diterima`, text)
break

//_MENCIONA TODOS OS MEMBROS DO GRUPO
case 'tagall':
msgFilter.isFiltered(from)
tiringa.updatePresence(from, Presence.composing)
//reply('comando desativado para evitar flood')
if (!isGroup) return reply(ptbr.group())
if (!isPremium) return reply('Você não é um usuário premium...')
if (!isGroupAdmins) return reply(ptbr.admin())
members_id = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `Total: ${groupMembers.length} membros\n`
for (let mem of groupMembers) {
todos += `║➸@${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions('╭╾╼◐⚋ ༒marcando ᴛᴏᴅᴏs os cornos༒⚋◑╾╼╮\n║➸'+todos+'╰╾╼◐⚋⚋ ༒ ∴₰Ⱦꪋℓo፝֯֟ ߷ ༒ ⚋⚋◑╾╼╯', members_id, true)
break

//_LIMPA TODOS OS CHATS
case 'clearall':
if (!isOwner) return reply('Só o  pode fazer isso')
anu = await tiringa.chats.all()
tiringa.setMaxListeners(25)
for (let _ of anu) {
tiringa.deleteChat(_.jid)
}
reply('todos os chats foram deletados :)')
break

//_PROMOVE UM MEMBRO DO GRUPO
case 'promover':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
pro = 'Berhasil Promote\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
tiringa.groupRemove(from, mentioned)
} else {
mentions(`O usuário: @${mentioned[0].split('@')[0]} foi promovido para o cargo de administrador do grupo`, mentioned, true)
tiringa.groupMakeAdmin(from, mentioned)
}
break

//_ALTERA O NOME DO GRUPO
case 'setname':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
tiringa.groupUpdateSubject(idgrup, `${body.slice(9)}`)
tiringa.sendMessage(from, 'nome do grupo alterado', text, {
quoted: mek
})
break

//_ALTERA A DESCRIÇÃO DO GRUPO
case 'setdesk':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
tiringa.groupUpdateDescription(from, `${body.slice(9)}`)
tiringa.sendMessage(from, 'descrição do grupo alterada', text, {
quoted: mek
})
break

//_REBAIXA UM MEMBRO
case 'rebaixar':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
reb = '\n'
for (let _ of mentioned) {
reb += `@${_.split('@')[0]}\n`
}
mentions(reb, mentioned, true)
tiringa.groupRemove(from, mentioned)
} else {
mentions(`O usuário @${mentioned[0].split('@')[0]} foi rebaixado para membro comum`, mentioned, true)
tiringa.groupDemoteAdmin(from, mentioned)
}
break

//_LISTA OS ADMINISTRADORES DO GRUPO
case 'listadmins':
case 'listadmin':
case 'adminlist':
if (!isGroup) return reply(ptbr.group())
adl = `Lista de administradores do grupo: ${groupMetadata.subject}\nTotal: ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
adl += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(adl, groupAdmins, true)
break

//_ALTERA A FOTO DE PERFIL DO BOT
case 'setppbot':
tiringa.updatePresence(from, Presence.composing)
if (!isOwner) return reply(ptbr.ownerB())
const botpp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contxtInfo: mek
const cuk = await tiringa.downloadAndSaveMediaMessage(botpp)
await tiringa.updateProfilePicture(botNumber, cuk)
reply('Obrigado pela nova foto de perfil')
break

//_LINK DO GRUPO
case 'linkgroup':
case 'linkgc':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
linkgc = await tiringa.groupInviteCode(from)
reply('Link do grupo: https://chat.whatsapp.com/'+linkgc)
break

//_RETIRAR BOT DO GRUPO
case 'leave':
if (!isGroup) return reply(ptbr.group())
if (isGroupAdmins || isOwner) {
tiringa.groupLeave(from)
} else {
reply(ptbr.admin())
}
break

//_MENCIONA TODOS OS MEMBROS DO GRUPO 
case 'hidetag':
tiringa.updatePresence(from, Presence.composing) 
if (!isOwner) return reply(ptbr.ownerB())
if (!isGroup) return reply(ptbr.group())
htg = body.slice(9)
group = await tiringa.groupMetadata(from);
member = group['participants']
jids = [];
member.map( async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: htg,
contextInfo: {mentionedJid: jids},
quoted: mek
}
await tiringa.sendMessage(from, options, text)
break

//_CONVERTE STICKER EM IMAGEM
case 'toimg':
tiringa.updatePresence(from, Presence.composing)                       
if (!isQuotedSticker) return reply('Você precisa marcar um sticker não animado para isso')
reply(ptbr.wait())
tomg = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medtmg = await tiringa.downloadAndSaveMediaMessage(tomg)
ran = getRandom('.png')
exec(`ffmpeg -i ${medtmg} ${ran}`, (err) => {
fs.unlinkSync(medtmg)
if (err) return reply('❌falha ao converter sticker em imagem❌')
buffer = fs.readFileSync(ran)
tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: 'conversão sucedida'})
fs.unlinkSync(ran)
})
break

case 'registrar':
case 'registrar':
case 'register':
case 'registra':
case 'registrar':
if (isUser) return  reply('você já está registrado')
if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar Italu|18`)
// if (args.length < 1) return reply(`Como se registrar:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar Italu|18`)
const namaUser = q.substring(0, q.indexOf('|') - 0)
const umurUser = q.substring(q.lastIndexOf('|') + 1)
const serialUser = createSerial(20)
if(isNaN(umurUser)) return reply(`Digite da forma correta:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar Italu|18`)
if (namaUser.length >= 60) return reply(`Seu nome é muito longo`)
if (umurUser > 40) return reply(`Idade máxima é 40 anos`)
if (umurUser < 12) return reply(`Idade mínima é 12 anos`)
veri = sender
try {
ppimg = await tiringa.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppimg = 'https://i.ibb.co/rxPtZS8/foto.jpg'
}
captionnya = 
`    〘 Registrado(a) com sucesso 〙
  Código: ${serialUser}
╔════════════════
╠≽️ Dia: ${date}
╠≽️ Hora: ${hr}
╠≽️ Nome de usuário: @${sender.split("@")[0]}
╠≽️ Nome de registro: ${namaUser}
╠≽️ Idade: ${umurUser}
╠≽️ Seu link wame: wa.me/${sender.split("@")[0]}
╠≽️ Número: ${sender.split("@")[0]}
╚════════════════
você se registrou, digite ${prefix}menu para listar meus comandos`
daftarimg = await getBuffer(ppimg)
addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
tiringa.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya, contextInfo: {mentionedJid: [sender]}})                    
break

//_FECHA O GRUPO
case 'fecharg':
tiringa.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
var nomor = mek.participant
const close = {
text: `Grupo fechado por: @${nomor.split("@s.whatsapp.net")[0]}`,
contextInfo: {
mentionedJid: [nomor]
}
}
tiringa.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
break

case 'cpf1':
cp1 = `${Math.floor(Math.random() * 300) +600}`
cp2 = `${Math.floor(Math.random() * 300) +600}`
cp3 = `${Math.floor(Math.random() * 300) +600}`
cp4 = `${Math.floor(Math.random() * 30) +60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
tiringa.sendMessage(from, `CPF gerado: ${cpf}`, text, {quoted: mek})
break

//_ABRE O GRUPO
case 'openg':
  case 'abrirg':
tiringa.updatePresence(from, Presence.composing)
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins) return reply(ptbr.admin())
if (!isBotGroupAdmins) return reply(ptbr.Badmin())
open = {
  text: `Grupo aberto por: @${sender.split("@")[0]}`,
  contextInfo: {
mentionedJid: [sender]
  }
}
tiringa.groupSettingChange (from, GroupSettingChange.messageSend, false)
tiringa.sendMessage(from, open, text, {
  quoted: mek
})
break

//_APAGA MENSAGENS ENVIADAS PELO BOT
case 'delete':
  case 'del':
case 'apagar':
if (!isGroup)return reply(ptbr.group())
if (!isGroupAdmins)return reply(ptbr.admin())
try {
tiringa.deleteMessage(from, {
  id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
  reply('Só é possível deletar mensagens minhas')
}
break

case 'welcome':
if (!isGroup) return reply(ptbr.group())
if (!isGroupAdmins)return reply(ptbr.admin())
if (args.length < 1) return reply('use =welcome 1 para ativar')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('já está ativado')
welkom.push(from)
fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
reply('O recurso bem-vindo foi ativado')
} else if (Number(args[0]) === 0) {
welkom.splice(from, disable)
fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
reply('O recurso bem-vindo foi desativado')
} else {
reply(`digite ${prefix}welcome 1 para ativar, e 0 para desativar o recurso`)
}
break

case 'clone':
if (!isGroup) return reply(ptbr.group())
if (!isOwner) return reply(ptbr.ownerB())
if (args.length < 1) return reply('Mencione quem devo roubar a foto de perfil')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await tiringa.getProfilePicture(id)
buffer = await getBuffer(pp)
tiringa.updateProfilePicture(botNumber, buffer)
mentions(`Roubei a foto de perfil de: @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('ocorreu um erro')
}
break
			
//mini games, rate, random
case 'dado':
msgFilter.isFiltered(from)
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./database/dados/'+dadu+'.webp')
tiringa.sendMessage(from, dador, sticker, {quoted: mek})
break

case 'caracoroa':
msgFilter.isFiltered(from)
const cara = fs.readFileSync('./database/cara/cara.webp');
const coroa = fs.readFileSync('./database/cara/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
reply(`você conseguiu: ${fej}`)
cararoa = fs.readFileSync('./database/cara/'+fej+'.webp')
tiringa.sendMessage(from, cararoa, sticker, {quoted: mek})
break
                
case 'morte':
case 'death':
idde = ["30","76","90","72","83","73","83","74","92","100","94","48","37","53","63"]
idade = idde[Math.floor(Math.random() * (idde.length))]
morte = `Pessoas com este nome: ${pushname} \nTendem a morrer aos ${idade} anos de idade.`
reply(morte)
break
			
case 'sn':
const sn = ['sim', 'não']
gosto = body.slice(3)
if (args.length < 1) return tiringa.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${prefix}sn O Italu é um baiano preguiçoso?`, text, {quoted: mek})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break
                   
case 'gadometro':
case 'gado':
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
reply(hisil)
break

case "ppt":
msgFilter.isFiltered(from)
if (args.length < 1) return reply(ptbr.tterro())
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 349
pptb = ppy
pph = `Você ganhou ${ppg} em xp`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(ptbr.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é do Tiringa-BOT"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
reply(`Tiringa-BOT jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break

case 'top5':
try{
if(!isGroup) return reply(ptbr.group())
if (!isGroupAdmins)return reply(ptbr.admin())
d = []
top1 = body.slice(5)
teks = `️‍Top 5${top1}:\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('ocorreu um erro')
}
break

case 'ship':
if (!isGroup) return reply(ptbr.group())
const ag = await tiringa.getgroupMetadata.participants(from)
const mem2 = ag[Math.floor(Math.random() * (ag.length))]
const mem1 = ag[Math.floor(Math.random() * (ag.length))]
casal = `@${mem1.jid.split('@')[0]}  teste @${mem2.jid.split('@')[0]}`
tiringa.sendMessage(from, casal, text, {quoted: mek, contextInfo: {"mentionedJid": [ag]}})
break
			
case 'slot':
msgFilter.isFiltered(from)
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 13) + 349
if ((somtoy == '🥑 : 🥑 : 🥑') ||(somtoy == '🍉 : 🍉 : 🍉') ||(somtoy == '🍓 : 🍓 : 🍓') ||(somtoy == '🍎 : 🍎 : 🍎') ||(somtoy == '🍍 : 🍍 : 🍍') ||(somtoy == '🥝 : 🥝 : 🥝') ||(somtoy == '🍑 : 🍑 : 🍑') ||(somtoy == '🥥 : 🥥 : 🥥') ||(somtoy == '🍋 : 🍋 : 🍋') ||(somtoy == '🍐 : 🍐 : 🍐') ||(somtoy == '🍌 : 🍌 : 🍌') ||(somtoy == '🍒 : 🍒 : 🍒') ||(somtoy == '🔔 : 🔔 : 🔔') ||(somtoy == '🍊 : 🍊 : 🍊') ||(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "Você ganhou!!!"
} else {
var vitr = "Você perdeu..."
}
const slott = 
`Consiga 3 iguais para ganhar
╔════ ≪ •❈• ≫ ════╗
║         [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║          [💰SLOT💰 | 777 ]        
╚════ ≪ •❈• ≫ ════╝
                      @ɪᴛᴀʟᴜ

${vitr}`
if (vitr == "Você ganhou!!!") {
setTimeout( () => {
reply(`Você ganhou ${ppg} em xp!!!`)
}, 1100)
}
tiringa.sendMessage(from, slott, text, {quoted: mek})
break

case 'chance':
tiringa.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return tiringa.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do Italu ser um trouxa`, text, {quoted: mek})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
tiringa.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break
     
case 'rola':
case 'pau':
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
//var (isNaN(tamanho))
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média😳'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
hasil = `Seu pau tem ${random}cm\n\n${pp}`
reply(hasil)
break
   
case 'gay':
tiringa.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'
}
hasil = `Você é ${random}% gay\n\n${bo}`
reply(hasil)
break

case 'roleta':
const tiro = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","pow","pow"]
const figr = ["pattta1","pattta2","pattta3"]
tpa = tiro[Math.floor(Math.random() * (tiro.length))]	
tpb = figr[Math.floor(Math.random() * (figr.length))]
figb = fs.readFileSync('./src/'+tpb+'.webp')
if (tpa == "vazio") {
var morte = "Você teve sorte dessa vez, o tambor estava vazio."
} else if (tpa == "pow") {
var morte = "Tinha uma bala no tambor, POW!"
}
if (morte == "Tinha uma bala no tambor, POW!") {
setTimeout( () => {
tiringa.sendMessage(from, figb, sticker, {quoted: mek})
}, 2100)
}
setTimeout( () => {
tiringa.sendMessage(from, morte, text, {quoted: mek})
}, 2300)
break

//_JOGO DA VELHA By: Resen
//INICIO DO JOGO DA VELHA ❌ ⭕ 🔲
case 'ttt':
const limitrl = getLimit(sender, daily)
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
} else if (limitrl !== undefined && cdd - (Date.now() - limitrl) > 0) {
reply('Opa, deixe seus abigos jogarem também, tente novamente em 8 minutos.')
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`O jogo começou!!!\nModo: ${tttset.tttdifficulty}`, text, tescuk, crtt)
tiringa.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
tiringa.sendMessage(from,`Caso não saiba como jogar digite: ${prefix}ttthelp`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) //4 minutos
addLimit(sender, daily)
}
break

case 'ttthelp':
tiringa.sendMessage(from, ttthelp(prefix), text)
break

case 'tttme':
if (!isGroup) return reply(ptbr.group())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
tiringa.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break

case 'tttrank':
if (!isGroup) return reply(ptbr.group())
//if (tictactoe.length < 3) return reply(`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await tiringa.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
break

case 'coord' :
tttset.playertest = sender
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
tiringa.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
tiringa.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
tiringa.sendMessage(from, `🎉🎉 VITÓRIA DO TIRINGA-BOT 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
tiringa.sendMessage(from, `🎉🎉 VITÓRIA DO TIRINGA-BOT 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
tiringa.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
tiringa.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
//_FIM DO JOGO DA VELHA By: Resen
					
case 'amongus':
msgFilter.isFiltered(from)
if (!isGroup) return reply(ptbr.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
//  tiringa.groupRemove(from, mentioned)
mentions(`${sus}`, mentioned, true)
break

case 'abraço':
msgFilter.isFiltered(from)
if (!isGroup) return reply(ptbr.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `Que fofo... @${sender.split("@")[0]} deu um abraço apertado em @${mentioned[0].split('@')[0]}`
mentions(yhb, yhb, true)
break

case 'shipp':
msgFilter.isFiltered(from)
if (!isGroup) return reply(ptbr.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
porc = `${Math.floor(Math.random() * 100)}`
yhb =  `@${mentioned[0].split('@')[0]} tem uma chance de ${porc}% de namorar com @${mentioned[1].split('@')[0]}`,
mentions(`${yhb}`, mentioned, true, {quoted: mek})
break
//mini games, rate, random


//_COMANDOS ANIME
case 'why':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/why`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'spoiler':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/spoiler`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'owoify':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/owoify`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'name':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/name`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'kemonomimi':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'gecg':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/gecg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'cuddle':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/cuddle`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'kiss':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/kiss`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'keta':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/keta`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'yuri':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/yuri`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
case 'foxg':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/fox_girl`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
case 'pat':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/pat`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
case 'poke':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/poke`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
case 'waifukawai':
try {
reply(ptbr.wait())
axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
tiringa.sendMessage(from, buf, image, {quoted: mek,caption: "KAWAII!!"})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('Ocorreu um erro')
}
break
		
case 'kemonomimi':
try {
reply(ptbr.wait())
axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
tiringa.sendMessage(from, buf, image, {quoted: mek})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('Ocorreu um erro')
}
break
		
case 'kuni':
try {
reply(ptbr.wait())
axios.get(`https://nekos.life/api/v2/img/kuni`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
tiringa.sendMessage(from, buf, image, {quoted: mek})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('Ocorreu um erro')
}
break 
case 'tickle':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/tickle`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
case 'random':
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
try {  
hah = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/randomp`)
hehe = await getBuffer(hah.url)
tiringa.sendMessage(from, hehe, image, {quoted:mek})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
    case 'waifu':
try {
reply(ptbr.wait())
axios.get('https://nekos.life/api/v2/img/waifu').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

 case 'animeavatar':
 try {
 reply(ptbr.wait())
axios.get('https://nekos.life/api/v2/img/avatar').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
                      
case 'wallpaper2':
try {
reply(ptbr.wait())
axios.get('https://akaneko-api.herokuapp.com/api/wallpapers').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
                
case 'baka':
try {
reply(ptbr.wait())
axios.get('https://nekos.life/api/v2/img/baka').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break   

//_COMANDOS NSFW
case 'holo':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/holo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

//GIF
case 'smug':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/smug`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'solo':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/solo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'ero':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/ero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'erofeet':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/erofeet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'spank':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/spank`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'feet':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/feet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'classic':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/classic`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'holoero':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/holoero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'cum':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/cum_jpg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'eroyuri':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/eroyuri`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'eron':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/eron`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'pwankg':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/pwankg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'anal':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/anal`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'lewd':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/lewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'lewdkemo':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/lewdkemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'solog':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/solog`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'lewdk':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/lewdk`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

//GIF
case 'ngif':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/ngif`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'blowjob':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/blowjob`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'hentai':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/hentai`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'hololewd':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/hololewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'trap':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/trap`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'les':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/les`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'smallboobs':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/smallboobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'futanari':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/futanari`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'femdom':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/femdom`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'feed':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/feed`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case'erok':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/erok`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case'feetg':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/feetg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case'erokemo':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/erokemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case'boobs':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
res = axios.get(`https://nekos.life/api/v2/img/boobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break

case 'nsfwloli':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
loli.getNSFWLoli(async (err, res) => {
if (err) return reply('❌ocorreu um erro❌\n\nTente novamente. ')
buffer = await getBuffer(res.url)
tiringa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Seu lolicon safado😔'})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
                  
case 'pussy':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
axios.get('https://nekos.life/api/v2/img/pussy_jpg').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} catch (e) {
e = String(e)
if (!e.includes("marker was not found")) {
reply(ptbr.erro())
} 
}
break
                       
//GIF
case 'cumgif':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
axios.get('https://nekos.life/api/v2/img/cum').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
a = webp2gifFile(buf)
mp4 = getBuffer(a.result)
tiringa.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
              
//GIF
case 'bjgif':
res = await fetchJson('https://nekos.life/api/v2/img/bj')
ggf = await getBuffer(res.url)
sendMediaURL(from, ggf, 'a')
break  
      
//GIF
case 'nsfwgif':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: '✅'})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
                
//GIF
case 'slap':
axios.get('https://nekos.life/api/v2/img/slap').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
break
                
//GIF
case 'rhug':
axios.get('https://nekos.life/api/v2/img/hug').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
break

case 'tits':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return reply(ptbr.nsfw())
reply(ptbr.waitsfw())
if(args[0] === "1") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/tits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "2") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/BestTits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "3") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/boobs').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "4") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/BiggerThanYouThought').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "6") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/smallboobs').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "7") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/TinyTits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "8") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/SmallTitsHugeLoad').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else if(args[0] === "9") {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/amazingtits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
} else {
var tits =  axios.get('https://meme-api.herokuapp.com/gimme/tits').then((res) => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tiringa.sendMessage(from, buf, MessageType.image, {quoted: mek})
})
})
}
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
break
//_ FIM DOS COMANDOS NSFW

default:
if (body == `${prefix}${command}`) {
hsl = `        ────────────────\nOi @${sender.split("@")[0]}!!\nO comando: ${prefix}${command} não existe\n\nTem certeza que digitou corretamente?🧙‍♂️\nUse ${prefix}Menu para listar meus comandos\n        ────────────────`
tiringa.sendMessage(from, hsl, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
}
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
reply(ptbr.erro())
}
})
}
starts()
