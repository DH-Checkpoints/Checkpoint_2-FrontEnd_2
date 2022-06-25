import signup from './signup.js'
import index from './index.js'
import tarefas from './tarefas.js'

if (location.pathname === '/cadastro.html') {
  signup()
} else if (location.pathname === '/index.html') {
  index()
} else if (location.pathname === '/tarefas.html') {
  tarefas()
}

/**
   ____ _               _                _       _     ____  
  / ___| |__   ___  ___| | ___ __   ___ (_)_ __ | |_  |___ \ 
 | |   | '_ \ / _ \/ __| |/ / '_ \ / _ \| | '_ \| __|   __) |
 | |___| | | |  __/ (__|   <| |_) | (_) | | | | | |_   / __/ 
  \____|_| |_|\___|\___|_|\_\ .__/ \___/|_|_| |_|\__| |_____|
                            |_|                              
*/