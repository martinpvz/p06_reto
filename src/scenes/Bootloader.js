class Bootloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'Bootloader'
        });
    }

    init() {
        console.log('Escena Bootloader');
    }

    preload() {
        //ESCENARIO
        this.load.path = './assets/';
        this.load.image('Fondo2', 'fondo.png');
        this.load.image('rock', 'rockframe.png');
        this.load.image('selecciona', 'selecciona.png');
        this.load.image('control', 'control.png');
        this.load.image('MovFondo', 'instrucciones.png');
        //EFECTOS DE SONIDO
        this.load.audio('principal', ['./principal.mp3']);
        this.load.audio('martinSong', ['./martin.mp3']);
        this.load.audio('alheSong', ['./alheli.mp3']);
        this.load.audio('ciciSong', ['./manuela.mp3']);
        this.load.audio('manuelSong', ['./citlalli.mp3']);
        this.load.audio('pop', ['./pop.mp3']);
        this.load.audio('select', ['./select.mp3']);
        //ALHELÍ
        this.load.atlas('alhe', 'alheli/alheli.png', 'alheli/alheli.json');
        this.load.image('RostroA', 'alheli/alhe_rostro.png');
        this.load.image('nombreAlhe', 'alheli/alheli_nombre.png');
        //MANUEL
        this.load.atlas('manu', 'manuel/manuel.png', 'manuel/manuel.json');
        this.load.image('RostroManu', 'manuel/manu_rostro.png');
        this.load.image('nombreManu', 'manuel/manu_nombre.png');
        //MARTÍN
        this.load.atlas('martin', 'martin/martin.png', 'martin/martin.json');
        this.load.image('RostroM', 'martin/martin_rostro.png');
        this.load.image('nombreM', 'martin/martin_nombre.png');
        //CITLALLI
        this.load.atlas('cici', 'citlalli/cici.png', 'citlalli/cici.json');
        this.load.image('RostroC', 'citlalli/cici_rostro.png');
        this.load.image('nombreCici', 'citlalli/cici_nombre.png');
    }

    create() {
        //FONDO
        this.fondo = this.add.image(750, 350, 'Fondo2').setScale(1.25).setDepth(-1);
        this.selecciona =  this.add.image(750, 25, 'selecciona').setScale(0.7).setDepth(10);
        this.control =  this.add.image(780, 703, 'control').setScale(0.12).setDepth(10);
        //BANDERAS
        this.seleccionado = false;
        //SPRITE ALHELI
        this.alheli = this.add.sprite(200, 260, 'alhe', 0).setScale(0.8);
        this.alheliR = this.add.image(200, 260, 'RostroA').setInteractive().setScale(0.23);
        //SPRITE MARTIN
        this.martin = this.add.sprite(570, 260, 'martin', 0).setScale(1);
        this.martinR = this.add.image(570, 265, 'RostroM').setInteractive().setScale(0.35);
        //SPRITE MANUEL
        this.manuel = this.add.sprite(950, 260, 'manu', 0).setScale(0.8);
        this.manuelR = this.add.image(950, 270, 'RostroManu').setInteractive().setScale(0.28);
        //SPRITE CICI
        this.cici = this.add.sprite(1320, 260, 'manu', 0).setScale(0.8);
        this.ciciR = this.add.image(1350, 263, 'RostroC').setInteractive().setScale(0.35);
        //TEXTOS NOMBRES Y DIRECCIONES
        //this.dir = this.add.text(400, 700, ('A para Izquierda - D para Derecha - ENTER seleccionar - ESC deseleccionar'), { font: '20px Arial Black' });
        this.alheTexto = this.add.text(65,575,'Pruebe los movimientos:\n[G]Puño\n[B]Bailar\n[R]Rodillas arriba',{fontFamily: 'Consolas',color: '#19484A',fontSize: '22px'}).setAlpha(0).setDepth(1);
        this.movFondo =  this.add.image(200, 615, 'MovFondo').setScale(0.15).setDepth(0).setAlpha(0);

        this.martinTexto = this.add.text(440,575,'Pruebe los movimientos:\n[J]Golpear\n[K]Defender\n[L]Gancho',{fontFamily: 'Consolas',color: '#19484A',fontSize: '22px'}).setAlpha(0).setDepth(1);
        this.movFondoM =  this.add.image(572, 615, 'MovFondo').setScale(0.15).setDepth(0).setAlpha(0);

        this.manuelTexto = this.add.text(835,575,'Pruebe los movimientos:\n[T]Posar\n[Y]Equilibrio\n[U]Patada',{fontFamily: 'Consolas',color: '#19484A',fontSize: '22px'}).setAlpha(0).setDepth(1);
        this.movFondoMa =  this.add.image(965, 615, 'MovFondo').setScale(0.15).setDepth(0).setAlpha(0);

        this.ciciTexto = this.add.text(1195,575,'Pruebe los movimientos:\n[Z]Festejar\n[X]Girar\n[ESPACIO]Sartenazo',{fontFamily: 'Consolas',color: '#19484A',fontSize: '22px'}).setAlpha(0).setDepth(1);
        this.movFondoC =  this.add.image(1325, 615, 'MovFondo').setScale(0.15).setDepth(0).setAlpha(0);

        //MARCOS
        this.cuadro = this.add.image(200, 260, 'rock').setInteractive().setName("alheli").setScale(0.3);
        this.cuadro2 = this.add.image(570, 260, 'rock').setInteractive().setName("martin").setScale(0.3);
        this.cuadro3 = this.add.image(950, 260, 'rock').setInteractive().setName("manuel").setScale(0.3);
        this.cuadro4 = this.add.image(1320, 260, 'rock').setInteractive().setName("cici").setScale(0.3);

        const teclado = Phaser.Input.Keyboard;

        //MUSIQUITA
        this.principal = this.sound.add('principal', { loop: true, volume: 0.4 });
        this.martinSong = this.sound.add('martinSong', { loop: true, volume: 0.5 });
        this.alheSong = this.sound.add('alheSong', { loop: true, volume: 0.4 });
        this.ciciSong = this.sound.add('ciciSong', { loop: true, volume: 0.3 });
        this.manuelSong = this.sound.add('manuelSong', { loop: true, volume: 0.2 });
        this.pop = this.sound.add('pop', { loop: false, volume: 0.5 });
        this.select = this.sound.add('select', { loop: false, volume: 0.5 });
        this.principal.play();
        //this.principal.stop();

        //ANIMACIÓN ALHELÍ
        this.anims.create({ key: 'idle', frames: this.anims.generateFrameNames('alhe', { prefix: 'alhe', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'baile', frames: this.anims.generateFrameNames('alhe', { prefix: 'baile0', suffix: '.png', start: 1, end: 8 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'golpe', frames: this.anims.generateFrameNames('alhe', { prefix: 'golpe0', suffix: '.png', start: 0, end: 6 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'rodillas', frames: this.anims.generateFrameNames('alhe', { prefix: 'rodillas0', suffix: '.png', start: 1, end: 9 }), repeat: -1, frameRate: 10 });
        this.alheli.anims.play('idle');
        this.alheli.setAlpha(0);
        this.alheliNombre = this.add.image(200, 520, 'nombreAlhe').setScale(0.20);
        
        //ANIMACIÓN MANUEL
        this.anims.create({ key: 'amen', frames: this.anims.generateFrameNames('manu', { prefix: 'amen', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 6 });
        this.anims.create({ key: 'fuerte', frames: this.anims.generateFrameNames('manu', { prefix: 'fuerte', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 6 });
        this.anims.create({ key: 'manu', frames: this.anims.generateFrameNames('manu', { prefix: 'manu', suffix: '.png', start: 1, end: 10 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'patada', frames: this.anims.generateFrameNames('manu', { prefix: 'patada', suffix: '.png', start: 1, end: 9 }), repeat: -1, frameRate: 8 });
        this.manuel.anims.play('manu');
        this.manuel.setAlpha(0);
        this.manuNombre = this.add.image(970, 520, 'nombreManu').setScale(0.20);

        //ANIMACIÓN MARTÍN
        this.anims.create({ key: 'defensa', frames: this.anims.generateFrameNames('martin', { prefix: 'defensa0', suffix: '.png', start: 1, end: 13 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'gancho', frames: this.anims.generateFrameNames('martin', { prefix: 'gancho0', suffix: '.png', start: 1, end: 16 }), repeat: -1, frameRate: 9 });
        this.anims.create({ key: 'golpeM', frames: this.anims.generateFrameNames('martin', { prefix: 'golpe0', suffix: '.png', start: 1, end: 12 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'rascar', frames: this.anims.generateFrameNames('martin', { prefix: 'rascar', suffix: '.png', start: 1, end: 10 }), repeat: -1, frameRate: 8 });
        this.martin.anims.play('rascar');
        this.martin.setAlpha(0);
        this.martinNombre = this.add.image(580, 520, 'nombreM').setScale(0.20);

        //ANIMACIÓN CICI
        this.anims.create({ key: 'festejar', frames: this.anims.generateFrameNames('cici', { prefix: 'baile', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 7 });
        this.anims.create({ key: 'beso', frames: this.anims.generateFrameNames('cici', { prefix: 'beso', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 7 });
        this.anims.create({ key: 'giro', frames: this.anims.generateFrameNames('cici', { prefix: 'giro', suffix: '.png', start: 1, end: 8 }), repeat: -1, frameRate: 11 });
        this.anims.create({ key: 'sarten', frames: this.anims.generateFrameNames('cici', { prefix: 'sarten', suffix: '.png', start: 1, end: 9 }), repeat: -1, frameRate: 8 });
        this.cici.anims.play('beso');
        this.cici.setAlpha(0);
        this.ciciNombre = this.add.image(1330, 520, 'nombreCici').setScale(0.20);

        //ARREGLO PARA CONTROLAR RECORRIDO
        let arreglo = ["this.alheli", "this.martin", "this.manuel","this.cici"];
        var i=0;

        //CONFIGURACIÓN MOVIMIENTO DERECHA
        this.input.keyboard.addKey(teclado.KeyCodes.D).on('down', () => {
            if(!this.seleccionado){
                if(i==3){
                    i=0;
                }else{
                    i+=1;
                }
                this.pop.play()
                if(arreglo[i]=="this.alheli")
                {
                    this.alheliR.setAlpha(1).setScale(.28);
                    this.alheliNombre.setScale(.23);
                    this.cuadro.setTint(0xA3EC3F);
                    this.cuadro.setScale(0.35)
    
                    this.martin.setAlpha(0);
                    this.martinR.setAlpha(1).setScale(.35);
                    this.cuadro2.clearTint();
                    this.cuadro2.setScale(0.3);
    
                    this.cici.setAlpha(0);
                    this.ciciR.setAlpha(1).setScale(.35);
                    this.ciciNombre.setScale(.2);
                    this.cuadro4.clearTint();
                    this.cuadro4.setScale(0.3);
                }
                if(arreglo[i]=="this.martin")
                {
                    this.martinR.setAlpha(1).setScale(.42);
                    this.martinNombre.setScale(.23);
                    this.cuadro2.setTint(0x4F33FF);
                    this.cuadro2.setScale(0.35);
    
                    this.alheli.setAlpha(0);
                    this.alheliR.setAlpha(1).setScale(.23);
                    this.alheliNombre.setScale(.2);
                    this.cuadro.clearTint();
                    this.cuadro.setScale(0.3);
    
                    this.manuel.setAlpha(0);
                    this.manuelR.setAlpha(1).setScale(.28);
                    this.cuadro3.clearTint();
                    this.cuadro3.setScale(0.3);
                }
                if(arreglo[i]=="this.manuel")
                {
                    this.manuelR.setAlpha(1).setScale(.32);
                    this.manuNombre.setScale(.23);
                    this.cuadro3.setTint(0xFCB540);
                    this.cuadro3.setScale(0.35);
    
                    this.martin.setAlpha(0);
                    this.martinR.setAlpha(1).setScale(.35);
                    this.martinNombre.setScale(.2);
                    this.cuadro2.clearTint();
                    this.cuadro2.setScale(0.3);
    
                    this.cici.setAlpha(0);
                    this.ciciR.setAlpha(1).setScale(.35);
                    this.ciciNombre.setScale(.2);
                    this.cuadro4.clearTint();
                    this.cuadro4.setScale(0.3);
                }
                if(arreglo[i]=="this.cici")
                {
                    this.ciciR.setAlpha(1).setScale(.4);
                    this.ciciNombre.setScale(.23);
                    this.cuadro4.setTint(0xFC40C6);
                    this.cuadro4.setScale(0.35);
    
                    this.manuel.setAlpha(0);
                    this.manuelR.setAlpha(1).setScale(.28);
                    this.manuNombre.setScale(.2);
                    this.cuadro3.clearTint();
                    this.cuadro3.setScale(0.3);
    
                    this.alheli.setAlpha(0);
                    this.alheliR.setAlpha(1).setScale(.23);
                    this.alheliNombre.setScale(.2);
                    this.cuadro.clearTint();
                    this.cuadro.setScale(0.3);
                }
            }

        });

        //CONFIGURACIÓN MOVIMIENTO IZQUIERDA
        this.input.keyboard.addKey(teclado.KeyCodes.A).on('down', () => {
            if(!this.seleccionado){
                if(i==0){
                    i=3;
                }else{
                    i-=1;
                }
                this.pop.play()
                if(arreglo[i]=="this.alheli")
                {
                    this.alheli.setAlpha(0);
                    this.alheliR.setAlpha(1).setScale(.28);
                    this.alheliNombre.setScale(.23);
                    this.cuadro.setTint(0xA3EC3F);
                    this.cuadro.setScale(0.35);
                    this.alheli.anims.play('idle');
    
                    this.martin.setAlpha(0);
                    this.martinR.setAlpha(1).setScale(.35);
                    this.martinNombre.setScale(.2);
                    this.cuadro2.clearTint();
                    this.cuadro2.setScale(0.3);
    
                    this.cici.setAlpha(0);
                    this.ciciR.setAlpha(1).setScale(.35);
                    this.ciciNombre.setScale(.2);
                    this.cuadro4.clearTint();
                    this.cuadro4.setScale(0.3);
                }
                if(arreglo[i]=="this.martin")
                {
                    this.martin.setAlpha(0);
                    this.martinR.setAlpha(1).setScale(.42);
                    this.martinNombre.setScale(.23);
                    this.cuadro2.setTint(0x4F33FF);
                    this.cuadro2.setScale(0.35);
    
                    this.alheli.setAlpha(0);
                    this.alheliR.setAlpha(1).setScale(.23);
                    this.alheliNombre.setScale(.2);
                    this.cuadro.clearTint();
                    this.cuadro.setScale(0.3);
    
                    this.manuel.setAlpha(0);
                    this.manuelR.setAlpha(1).setScale(.28);
                    this.manuNombre.setScale(.2);
                    this.cuadro3.clearTint();
                    this.cuadro3.setScale(0.3);
                }
                if(arreglo[i]=="this.manuel")
                {
                    this.manuel.setAlpha(0);
                    this.manuelR.setAlpha(1).setScale(.32);
                    this.manuNombre.setScale(.23);
                    this.cuadro3.setTint(0xFCB540);
                    this.cuadro3.setScale(0.35);
    
                    this.martin.setAlpha(0);
                    this.martinR.setAlpha(1).setScale(.35);
                    this.martinNombre.setScale(.2);
                    this.cuadro2.clearTint();
                    this.cuadro2.setScale(0.3);
    
                    this.cici.setAlpha(0);
                    this.ciciR.setAlpha(1).setScale(.35);
                    this.ciciNombre.setScale(.2);
                    this.cuadro4.clearTint();
                    this.cuadro4.setScale(0.3);
                }
                if(arreglo[i]=="this.cici")
                {
                    this.cici.setAlpha(0);
                    this.ciciR.setAlpha(1).setScale(.4);
                    this.ciciNombre.setScale(.23);
                    this.cuadro4.setTint(0xFC40C6);
                    this.cuadro4.setScale(0.35);
    
                    this.manuel.setAlpha(0);
                    this.manuelR.setAlpha(1).setScale(.28);
                    this.manuNombre.setScale(.2);
                    this.cuadro3.clearTint();
                    this.cuadro3.setScale(0.3);
    
                    this.alheli.setAlpha(0);
                    this.alheliR.setAlpha(1).setScale(.23);
                    this.alheliNombre.setScale(.2);
                    this.cuadro.clearTint();
                    this.cuadro.setScale(0.3);
                }
            }

        });

        //SELECCIÓN CON TECLA ENTER
        this.input.keyboard.addKey(teclado.KeyCodes.ENTER).on('down', () => {
            console.log("Entró a enter");
            this.select.play()
            this.principal.stop()
            this.seleccionado = true;
            this.selecciona.setAlpha(0)
            if(arreglo[i]=="this.alheli")
            {
                this.alheliR.setAlpha(0);
                this.alheli.setAlpha(1);
                this.alheTexto.setAlpha(1);
                this.movFondo.setAlpha(1);

                this.ciciSong.stop()
                this.martinSong.stop()
                this.alheSong.play()
            }
            if(arreglo[i]=="this.martin")
            {
                this.martinR.setAlpha(0);
                this.martin.setAlpha(1);
                this.martinTexto.setAlpha(1);
                this.movFondoM.setAlpha(1);

                this.manuelSong.stop()
                this.alheSong.stop()
                this.martinSong.play()
            }
            if(arreglo[i]=="this.manuel")
            {
                this.manuelR.setAlpha(0);
                this.manuel.setAlpha(1);
                this.manuelTexto.setAlpha(1);
                this.movFondoMa.setAlpha(1);

                this.ciciSong.stop()
                this.martinSong.stop()
                this.manuelSong.play()
            }
            if(arreglo[i]=="this.cici")
            {
                this.ciciR.setAlpha(0);
                this.cici.setAlpha(1);
                this.ciciTexto.setAlpha(1);
                this.movFondoC.setAlpha(1);
                this.alheSong.stop()
                this.manuelSong.stop()
                this.ciciSong.play()
            }            
        });

        //SALIR DE SELECCIÓN CON TECLA ESCAPE
        this.input.keyboard.addKey(teclado.KeyCodes.ESC).on('down', () => {
            console.log("Entró a escape");
            this.seleccionado = false;
            this.selecciona.setAlpha(1)
            //ALHELI CONFIGURACIÓN
            this.alheli.setAlpha(0);
            this.alheliR.setAlpha(1);
            this.alheTexto.setAlpha(0);
            this.movFondo.setAlpha(0);
            this.alheli.anims.play('idle');
            
            //MARTIN CONFIGURACIÓN
            this.martin.setAlpha(0);
            this.martinR.setAlpha(1);
            this.martinTexto.setAlpha(0);
            this.martin.anims.play('rascar');
            this.movFondoM.setAlpha(0);

            //MANUEL CONFIGURACIÓN
            this.manuel.setAlpha(0);
            this.manuelR.setAlpha(1);
            this.manuelTexto.setAlpha(0);
            this.manuel.anims.play('manu');
            this.movFondoMa.setAlpha(0);

            //CICI CONFIGURACIÓN
            this.cici.setAlpha(0);
            this.ciciR.setAlpha(1);
            this.ciciTexto.setAlpha(0);
            this.cici.anims.play('beso');
            this.movFondoC.setAlpha(0);

            this.alheSong.stop()
            this.manuelSong.stop()
            this.ciciSong.stop()
            this.martinSong.stop()
            this.principal.play()
        });

        //FUNCIONALIDAD CON TECLAS ALHELI
        this.input.keyboard.addKey(teclado.KeyCodes.G).on('down', () => {
            if(this.seleccionado){
                this.alheli.anims.play('golpe');
            }
        });   
        this.input.keyboard.addKey(teclado.KeyCodes.B).on('down', () => {
            if(this.seleccionado){
                this.alheli.anims.play('baile');
            }
        }); 
        this.input.keyboard.addKey(teclado.KeyCodes.R).on('down', () => {
            if(this.seleccionado){
                this.alheli.anims.play('rodillas');
            }
        }); 

        //FUNCIONALIDAD CON TECLAS MARTIN
        this.input.keyboard.addKey(teclado.KeyCodes.J).on('down', () => {
            if(this.seleccionado){
                this.martin.anims.play('golpeM');
            }
        });   
        this.input.keyboard.addKey(teclado.KeyCodes.K).on('down', () => {
            if(this.seleccionado){
                this.martin.anims.play('defensa');
            }
        }); 
        this.input.keyboard.addKey(teclado.KeyCodes.L).on('down', () => {
            if(this.seleccionado){
                this.martin.anims.play('gancho');
            }
        });      

        //FUNCIONALIDAD CON TECLAS MANUEL
        this.input.keyboard.addKey(teclado.KeyCodes.T).on('down', () => {
            if(this.seleccionado){
                this.manuel.anims.play('fuerte');
            }
        });   
        this.input.keyboard.addKey(teclado.KeyCodes.Y).on('down', () => {
            if(this.seleccionado){
                this.manuel.anims.play('amen');
            }
        }); 
        this.input.keyboard.addKey(teclado.KeyCodes.U).on('down', () => {
            if(this.seleccionado){
                this.manuel.anims.play('patada');
            }
        });  

        //FUNCIONALIDAD CON TECLAS CITLA
        this.input.keyboard.addKey(teclado.KeyCodes.Z).on('down', () => {
            if(this.seleccionado){
                this.cici.anims.play('festejar');
            }
        });   
        this.input.keyboard.addKey(teclado.KeyCodes.X).on('down', () => {
            if(this.seleccionado){
                this.cici.anims.play('giro');
            }
        }); 
        this.input.keyboard.addKey(teclado.KeyCodes.SPACE).on('down', () => {
            if(this.seleccionado){
                this.cici.anims.play('sarten');
            }
        });    
    }

    update(time, delta) {

    }
}

export default Bootloader;