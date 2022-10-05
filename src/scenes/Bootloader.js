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
        this.load.image('Fondo2', 'Fondo2.png');
        this.load.image('wooden', 'woodframe.png');
        this.load.audio('principal', ['./principal.mp3']);
        this.load.audio('martinSong', ['./martin.mp3']);
        this.load.audio('alheSong', ['./alheli.mp3']);
        this.load.audio('ciciSong', ['./citlalli.mp3']);
        this.load.audio('manuelSong', ['./manuela.mp3']);
        this.load.audio('pop', ['./pop.mp3']);
        this.load.audio('select', ['./select.mp3']);
        this.load.image('RostroA', 'alheli/alhe_rostro.png');
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
        this.load.image('RostroC', 'citlalli/cici_rostro.png');
        this.load.image('nombreCici', 'citlalli/cici_nombre.png');
    }

    create() {
        //BANDERAS
        this.seleccionado = false;

        //AÑADIR SPRITES
        this.alheli = this.add.sprite(180, 260, 'alhe', 0).setScale(0.8);
        this.alheliR = this.add.image(180, 260, 'RostroA').setInteractive().setScale(0.25);

        this.martin = this.add.sprite(550, 260, 'martin', 0).setScale(1);
        this.martinR = this.add.image(550, 260, 'RostroM').setInteractive().setScale(0.35);

        this.manuel = this.add.sprite(950, 260, 'manu', 0).setScale(0.8);
        this.manuelR = this.add.image(950, 270, 'RostroManu').setInteractive().setScale(0.28);

        this.cici = this.add.sprite(1320, 260, 'manu', 0).setScale(0.8);
        this.ciciR = this.add.image(1350, 260, 'RostroC').setInteractive().setScale(0.35);

        this.dir = this.add.text(50, 650, ('A para Izquierda - D para Derecha = ENTER seleccionar'), { font: '38px Arial Black' });
        this.alheTexto = this.add.text(50,550,'Pruebe los movimientos:\n[G]Golpear\n[B]Bailar\n[R]Tocar rodillas',{fontFamily: 'Consolas',color: '#19484A',fontSize: '22px'}).setAlpha(0);
        this.martinTexto = this.add.text(50,550,'Pruebe los movimientos:\n[J]Golpear\n[K]Defender\n[L]Gancho',{fontFamily: 'Consolas',color: '#19484A',fontSize: '22px'}).setAlpha(0);
        this.manuelTexto = this.add.text(50,550,'Pruebe los movimientos:\n[T]Posar\n[Y]Equilibrio\n[U]Patada',{fontFamily: 'Consolas',color: '#19484A',fontSize: '22px'}).setAlpha(0);
        this.ciciTexto = this.add.text(50,550,'Pruebe los movimientos:\n[Z]Festejar\n[X]Girar\n[ESPACIO]Sartenazo',{fontFamily: 'Consolas',color: '#19484A',fontSize: '22px'}).setAlpha(0);
        this.fondo = this.add.image(750, 360, 'Fondo2');

        this.cuadro = this.add.image(180, 260, 'wooden').setInteractive().setName("alheli");
        this.cuadro2 = this.add.image(550, 260, 'wooden').setInteractive().setName("martin");
        this.cuadro3 = this.add.image(950, 260, 'wooden').setInteractive().setName("manuel");
        this.cuadro4 = this.add.image(1320, 260, 'wooden').setInteractive().setName("cici");

        this.fondo.setScale(2.2);
        this.fondo.setDepth(-1);

        this.cuadro.setScale(0.3);
        // this.cuadro.setDepth(-1);
        this.cuadro2.setScale(0.3);
        this.cuadro3.setScale(0.3);
        this.cuadro4.setScale(0.3);

        const teclado = Phaser.Input.Keyboard;

        //MUSIQUITA
        this.principal = this.sound.add('principal', { loop: true, volume: 0.2 });
        this.martinSong = this.sound.add('martinSong', { loop: true, volume: 0.2 });
        this.alheSong = this.sound.add('alheSong', { loop: true, volume: 0.2 });
        this.ciciSong = this.sound.add('ciciSong', { loop: true, volume: 0.2 });
        this.manuelSong = this.sound.add('manuelSong', { loop: true, volume: 0.2 });
        this.pop = this.sound.add('pop', { loop: false, volume: 0.5 });
        this.select = this.sound.add('select', { loop: false, volume: 0.5 });
        this.principal.play();
        //this.principal.stop();

        //ANIMACIÓN ALHELÍ
        // this.alheli = this.add.sprite(200, 200, 'alhe', 0);
        this.anims.create({ key: 'idle', frames: this.anims.generateFrameNames('alhe', { prefix: 'alhe', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'baile', frames: this.anims.generateFrameNames('alhe', { prefix: 'baile0', suffix: '.png', start: 1, end: 8 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'golpe', frames: this.anims.generateFrameNames('alhe', { prefix: 'golpe0', suffix: '.png', start: 0, end: 6 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'rodillas', frames: this.anims.generateFrameNames('alhe', { prefix: 'rodillas0', suffix: '.png', start: 1, end: 9 }), repeat: -1, frameRate: 8 });
        //this.alheli.anims.play('idle');
        this.alheli.setAlpha(0);
        this.alheliNombre = this.add.image(180, 510, 'nombreAlhe').setScale(0.20);
        
        //ANIMACIÓN MANUEL
        // this.manuel = this.add.sprite(500, 200, 'manu', 0);
        this.anims.create({ key: 'amen', frames: this.anims.generateFrameNames('manu', { prefix: 'amen', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'fuerte', frames: this.anims.generateFrameNames('manu', { prefix: 'fuerte', suffix: '.png', start: 1, end: 7 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'manu', frames: this.anims.generateFrameNames('manu', { prefix: 'manu', suffix: '.png', start: 1, end: 10 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'patada', frames: this.anims.generateFrameNames('manu', { prefix: 'patada', suffix: '.png', start: 1, end: 9 }), repeat: -1, frameRate: 8 });
        this.manuel.anims.play('manu');
        this.manuel.setAlpha(0);
        this.manuNombre = this.add.image(970, 510, 'nombreManu').setScale(0.20);

        //ANIMACIÓN MARTÍN
        // this.martin = this.add.sprite(800, 200, 'martin', 0);
        this.anims.create({ key: 'defensa', frames: this.anims.generateFrameNames('martin', { prefix: 'defensa0', suffix: '.png', start: 1, end: 13 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'gancho', frames: this.anims.generateFrameNames('martin', { prefix: 'gancho0', suffix: '.png', start: 1, end: 16 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'golpeM', frames: this.anims.generateFrameNames('martin', { prefix: 'golpe0', suffix: '.png', start: 1, end: 12 }), repeat: -1, frameRate: 8 });
        this.anims.create({ key: 'rascar', frames: this.anims.generateFrameNames('martin', { prefix: 'rascar', suffix: '.png', start: 1, end: 10 }), repeat: -1, frameRate: 8 });
        this.martin.anims.play('rascar');
        this.martin.setAlpha(0);
        this.martinNombre = this.add.image(560, 510, 'nombreM').setScale(0.20);

        //ANIMACIÓN CICI
        // this.cici = this.add.sprite(800, 200, 'martin', 0);
        this.cici.anims.play('patada');
        this.cici.setAlpha(0);
        this.ciciNombre = this.add.image(1330, 510, 'nombreCici').setScale(0.20);

        let arreglo = ["this.alheli", "this.martin", "this.manuel","this.cici"];
        var i=0;

        // function elegir(i) {
            
        // }

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
                    this.cuadro.setTint(0x4F33FF);
                    this.cuadro.setScale(0.35)
    
                    this.martin.setAlpha(0);
                    this.martinR.setAlpha(1).setScale(.35);
                    this.cuadro2.clearTint();
                    this.cuadro2.setScale(0.3);
    
                    this.cici.setAlpha(0);
                    this.ciciR.setAlpha(1).setScale(.35);
                    this.cuadro4.clearTint();
                    this.cuadro4.setScale(0.3);
                }
                if(arreglo[i]=="this.martin")
                {
                    this.martinR.setAlpha(1).setScale(.42);
                    this.cuadro2.setTint(0x4F33FF);
                    this.cuadro2.setScale(0.35);
    
                    this.alheli.setAlpha(0);
                    this.alheliR.setAlpha(1).setScale(.25);
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
                    this.cuadro3.setTint(0x4F33FF);
                    this.cuadro3.setScale(0.35);
    
                    this.martin.setAlpha(0);
                    this.martinR.setAlpha(1).setScale(.35);
                    this.cuadro2.clearTint();
                    this.cuadro2.setScale(0.3);
    
                    this.cici.setAlpha(0);
                    this.ciciR.setAlpha(1).setScale(.35);
                    this.cuadro4.clearTint();
                    this.cuadro4.setScale(0.3);
                }
                if(arreglo[i]=="this.cici")
                {
                    this.ciciR.setAlpha(1).setScale(.4);
                    this.cuadro4.setTint(0x4F33FF);
                    this.cuadro4.setScale(0.35);
    
                    this.manuel.setAlpha(0);
                    this.manuelR.setAlpha(1).setScale(.28);
                    this.cuadro3.clearTint();
                    this.cuadro3.setScale(0.3);
    
                    this.alheli.setAlpha(0);
                    this.alheliR.setAlpha(1).setScale(.25);
                    this.cuadro.clearTint();
                    this.cuadro.setScale(0.3);
                }
            }

        });

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
                    this.cuadro.setTint(0x4F33FF);
                    this.cuadro.setScale(0.35);
                    this.alheli.anims.play('idle');
    
                    this.martin.setAlpha(0);
                    this.martinR.setAlpha(1).setScale(.35);
                    this.cuadro2.clearTint();
                    this.cuadro2.setScale(0.3);
    
                    this.cici.setAlpha(0);
                    this.ciciR.setAlpha(1).setScale(.35);
                    this.cuadro4.clearTint();
                    this.cuadro4.setScale(0.3);
                }
                if(arreglo[i]=="this.martin")
                {
                    this.martin.setAlpha(0);
                    this.martinR.setAlpha(1).setScale(.42);
                    this.cuadro2.setTint(0x4F33FF);
                    this.cuadro2.setScale(0.35);
    
                    this.alheli.setAlpha(0);
                    this.alheliR.setAlpha(1).setScale(.25);
                    this.cuadro.clearTint();
                    this.cuadro.setScale(0.3);
    
                    this.manuel.setAlpha(0);
                    this.manuelR.setAlpha(1).setScale(.28);
                    this.cuadro3.clearTint();
                    this.cuadro3.setScale(0.3);
                }
                if(arreglo[i]=="this.manuel")
                {
                    this.manuel.setAlpha(0);
                    this.manuelR.setAlpha(1).setScale(.32);
                    this.cuadro3.setTint(0x4F33FF);
                    this.cuadro3.setScale(0.35);
    
                    this.martin.setAlpha(0);
                    this.martinR.setAlpha(1).setScale(.35);
                    this.cuadro2.clearTint();
                    this.cuadro2.setScale(0.3);
    
                    this.cici.setAlpha(0);
                    this.ciciR.setAlpha(1).setScale(.35);
                    this.cuadro4.clearTint();
                    this.cuadro4.setScale(0.3);
                }
                if(arreglo[i]=="this.cici")
                {
                    this.cici.setAlpha(0);
                    this.ciciR.setAlpha(1).setScale(.5);
                    this.cuadro4.setTint(0x4F33FF);
                    this.cuadro4.setScale(0.35);
    
                    this.manuel.setAlpha(0);
                    this.manuelR.setAlpha(1).setScale(.28);
                    this.cuadro3.clearTint();
                    this.cuadro3.setScale(0.3);
    
                    this.alheli.setAlpha(0);
                    this.alheliR.setAlpha(1).setScale(.25);
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
            if(arreglo[i]=="this.alheli")
            {
                this.alheliR.setAlpha(0);
                this.alheli.setAlpha(1);
                this.alheTexto.setAlpha(1);
                this.ciciSong.stop()
                this.martinSong.stop()
                this.alheSong.play()
            }
            if(arreglo[i]=="this.martin")
            {
                this.martinR.setAlpha(0);
                this.martin.setAlpha(1);
                this.martinTexto.setAlpha(1);
                this.manuelSong.stop()
                this.alheSong.stop()
                this.martinSong.play()
            }
            if(arreglo[i]=="this.manuel")
            {
                this.manuelR.setAlpha(0);
                this.manuel.setAlpha(1);
                this.manuelTexto.setAlpha(1);
                this.ciciSong.stop()
                this.martinSong.stop()
                this.manuelSong.play()
            }
            if(arreglo[i]=="this.cici")
            {
                this.ciciR.setAlpha(0);
                this.cici.setAlpha(1);
                this.ciciTexto.setAlpha(1);
                this.alheSong.stop()
                this.manuelSong.stop()
                this.ciciSong.play()
            }            
        });

        //SALIR DE SELECCIÓN CON TECLA ESCAPE
        this.input.keyboard.addKey(teclado.KeyCodes.ESC).on('down', () => {
            console.log("Entró a escape");
            this.seleccionado = false;
            //ALHELI CONFIGURACIÓN
            this.alheli.setAlpha(0);
            this.alheliR.setAlpha(1);
            this.alheTexto.setAlpha(0);
            this.alheli.anims.play('idle');
            //MARTIN CONFIGURACIÓN
            this.martin.setAlpha(0);
            this.martinR.setAlpha(1);
            this.martinTexto.setAlpha(0);
            this.martin.anims.play('rascar');
            //MANUEL CONFIGURACIÓN
            this.manuel.setAlpha(0);
            this.manuelR.setAlpha(1);
            this.manuelTexto.setAlpha(0);
            this.manuel.anims.play('manu');
            this.ciciTexto.setAlpha(0);
            
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
   

        // this.alheliR.on(eventos.POINTER_OVER, function() {
        //     this.setAlpha(0);
        //     this.alheli.alpha= 1;
        // });
        // this.alheliR.on(eventos.POINTER_OUT, function() {
        //     this.setAlpha(1);
        //     this.alheli.alpha= 0;
        // });

        // this.input.on(teclado., (pointer, gameObject) => {
        //     // this.pasar.play();
        //     gameObject.setTint(0xabdcd2);
        //     gameObject.setScale(0.35);
        //     let x = gameObject.name;
        //     this.alheliR.setAlpha(0);
        //     this.x.setAlpha(1);
        //     this.alheli.anims.play("idle");
        //     });

        // this.input.on(eventos.GAMEOBJECT_OUT, (pointer, gameObject) => {
        //     gameObject.clearTint();
        //     gameObject.setScale(0.3);
        //     this.alheliR.setAlpha(1);
        //     this.alheli.anims.stop(null, true);
        //     this.alheli.setAlpha(0);
        //     });
    }

    update(time, delta) {

    }
}

export default Bootloader;