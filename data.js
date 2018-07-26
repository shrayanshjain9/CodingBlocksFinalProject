var dec;
var i;
// Create a new path and style it:
var isRunning = false;
var istime;
var deleteCandy = false;
var init1=40;
var k=0;
var max;
// function randomMax(){
//     return ((Math.random()*20));
// }

// Add 5 segment points to the path spread out
// over the width of the view:
    // Uncomment the following line and run the script again
    // to smooth the path:
    // path.smooth();
var maxPoints = new Point(view.size.width, view.size.height);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var data = {
	q: {
		sound: new Howl({
  		src: ['A/bubbles.mp3']
		}),
		// color: '#1abc9c',
		shape: function (){
            var randomPoint = Point.random();
            var point = maxPoints * randomPoint;
            var dec = new Path.Circle(point, 700);
            dec.fillColor = getRandomColor();
            dec.skew(30);
            // dec.skew(50); second option
            // dec.rotate(20);
            dec.name="circle";
            decagon.push(dec);
            return dec;
        }
	},
	w: {
		sound: new Howl({
  		src: ['A/clay.mp3']
		}),
		// color: '#2ecc71',
        shape: function () {
            var rectangle = new Rectangle(new Point(view.center+100), new Point(view.center)-100);
            var path = new Path.Rectangle(rectangle);
            path.strokeColor = getRandomColor();
            path.name = "square";
            path.rotate(20);
            // path.smooth();
            path.strokeWidth = 20;
            decagon.push(path);
            return path;
		}

	},
    e: {
        sound: new Howl({
            src: ['A/confetti.mp3']
        }),
        // color: '#3498db',
        shape: function () {
            for (var i = 0; i < 30; i++) {
                // The center position is a random point in the view:
                var path = new Path.Circle({
                    center: Point.random() * view.size,
                    radius: i / 20 + 20,
                    fillColor: getRandomColor(),
                    strokeColor: 'white'
                });
                path.fillColor.hue += i;
                path.name = 'candy';
                decagon.push(path);

            }
            console.log(path.name);
            return path;
        }
    },
	r: {
		sound: new Howl({
  		src: ['A/corona.mp3']
		}),
		color: '#9b59b6',
        shape: function () {
			for (var i=0;i<10;i++) {
                var rectangle = new Rectangle(new Point(view.center + 100), new Point(view.center) - 100);
                var path = new Path.Rectangle(rectangle);
                path.strokeColor = getRandomColor();
                path.name = "square2";
                path.rotate(5 * i);
                decagon.push(path);
                // remove(path,1000);
            }
            istime=new Date().getTime();
            return path;
        }
	},
		t: {
		sound: new Howl({
  		src: ['A/dotted-spiral.mp3']
		}),
		// color: '#34495e',
            shape: function(){
                for (var i=0;i<10;i++) {
                    var randomPoint = Point.random();
                    var point = maxPoints * randomPoint;
                    var rectangle = new Rectangle(point, new Point(500,500));
                    var path = new Path.Rectangle(rectangle);
                    // var p1=path.splitAt(path.getNearestLocation([view.center.x - 40,view.center.y - 250]));
                    // var p2=path.splitAt(path.getNearestLocation([view.center.x - 50,view.center.y - 250]));
                    // p1.closed = true;
                    // p2.closed = true;
                    //
                    // // p1.position.x += 10;
                    path.fillColor = getRandomColor();
                    path.name = "square3";
                    path.rotate(15 * i);
                    decagon.push(path);
                }
                return path;
            }
            },
	y: {
		sound: new Howl({
  		src: ['A/flash-1.mp3']
		}),
		// color: '#16a085',
        shape: function () {
            console.log(view.center.x);
            var dec = new Path.Circle(view.center, 300);
            dec.fillColor = getRandomColor();
            dec.name="circles";
            decagon.push(dec);
            istime=new Date().getTime();
            for (var i = 0; i < 40; i++) {
                // The center position is a random point in the view:
                var path = new Path.Circle({
                    center: Point.random() * view.size,
                    radius: i / 20 + 20,
                    fillColor: getRandomColor(),
                    strokeColor: 'black'
                });
                path.fillColor.hue += i;
                path.name = 'candyup';
                decagon.push(path);

            }
            console.log(path.name);
            return path;
        }
	},
	u: {
		sound: new Howl({
  		src: ['A/flash-2.mp3']
		}),
		color: '#27ae60',
		shape: function(){
			var z = 317;
			for(var i=0;i<3;i++) {
				console.log((z+(34*i)));
                var dec = new Path.Rectangle(new Point(view.size.width, (317+i*34)), new Point(view.size.width - 400, (334+i*34)));
                dec.fillColor = getRandomColor();
                dec.name = "stripes";
                decagon.push(dec);
            }
            // remove(dec,500);
        }
	},
	i: {
		sound: new Howl({
  		src: ['A/flash-3.mp3']
		}),
		color: '#2980b9',
        shape: function(){
            for(var i=0;i<3;i++) {
                var dec = new Path.Rectangle(new Point(0, (334+i*34)), new Point( 400, (351+i*34)));
                dec.fillColor = getRandomColor();
                dec.name = "stripes2";
                decagon.push(dec);
            }
        }
	},
	o: {
		sound: new Howl({
			src: ['A/glimmer.mp3']
		}),
		// color: '#8e44ad',
        shape: function () {
            var randomPoint = Point.random();
            var point = maxPoints * randomPoint;
            var center = new Point(point,point);
            var sides = 7;
            var radius = 7;
            var triangle = new Path.RegularPolygon(center, sides, radius);
            triangle.fillColor = getRandomColor();
            triangle.strokeColor= getRandomColor();
            triangle.strokeWidth= 200;
            triangle.name="tritopoly";
            decagon.push(triangle);
            remove(triangle,1000);
        }
	},
	p: {
		sound: new Howl({
  		src: ['A/moon.mp3']
		}),
		// color: '#2c3e50'
        shape: function () {
            // var randomPoint = Point.random();
            // var point = maxPoints * randomPoint;
            var from = new Point(20, 20);
            var to = new Point(80, 80);
                var line = new Path.Line(from,to);
                line.strokeColor= getRandomColor();
                line.strokeWidth=4;
                line.name="lines";
                decagon.push(line);
            // return line;
            // remove(line,2000);
        }
	},
	a: {
		sound: new Howl({
  		src: ['A/pinwheel.mp3']
		}),
		// color: '#f1c40f'
        shape: function () {
            var from = new Point(20, 20);
            var through = new Point(60, 20);
            var to = new Point(80, 80);
            var path = new Path.Arc(from, through, to);
            path.name='arc';
            decagon.push(path);
        }
	},
	s: {
		sound: new Howl({
  		src: ['A/piston-1.mp3']
		}),
		// color: '#e67e22'
        shape: function () {

            for (var i=0;i<=30;i++){
                var randomPoint = Point.random();
                var point = maxPoints * randomPoint;
                var rectangle = new Rectangle(new Point(point, point), new Size(point,point+i));
                var path = new Path.Ellipse(rectangle);
                // path.fillColor = getRandomColor();
                path.strokeColor=getRandomColor();
                path.strokeWidth=3;
                path.name='ellipse';
                decagon.push(path);
                remove(path,800);

            }

        }
	},
		d: {
		sound: new Howl({
  		src: ['A/piston-2.mp3']
		}),
		// color: '#e74c3c'
        shape: function () {
		    for (var i=0;i<=6;i++){
                var center = new Point(view.center-200);
                var points = 9*i;
                var radius1 = 65*i;
                var radius2 = 90*i;
                var path = new Path.Star(center, points, radius1, radius2);
                path.fillColor = getRandomColor();
                path.name='star';
                decagon.push(path);
                remove(path,1500);
            }
        }
	},
	f: {
		sound: new Howl({
  		src: ['A/prism-1.mp3']
		}),
		// color: '#95a5a6'
        shape: function () {
            var randomPoint = Point.random();
            var point = maxPoints * randomPoint;
            var circlePath = new Path.Circle(point, 30);
            circlePath.style = {
                fillColor: getRandomColor(),
                strokeColor: getRandomColor()
            };
            var copy = circlePath.clone();
            copy.strokeColor = getRandomColor();
            copy.scale(0.2, circlePath.bounds.topRight);
            copy.name='twocircle';
            decagon.push(copy);
            remove(copy,1000);
            remove(circlePath,1000);
        }
	},
    
	g: {
		sound: new Howl({
  		src: ['A/prism-2.mp3']
		}),
		// color: '#f39c12'
        shape: function () {
            var randomPoint = Point.random();
            var point = maxPoints * randomPoint;
            var path = new Path.Rectangle(point, new Size(100, 50));
            path.style = {
                fillColor: getRandomColor(),
                // strokeColor: 'black'
            };
            // path.scale(0.9);
            var copy = path.clone();
            // copy.strokeColor = 'red';
            copy.name="rotateatleft";
            decagon.push(copy);
            remove(copy,1000);
            remove(path,1000);

        }
	},
	h: {
		sound: new Howl({
  		src: ['A/prism-3.mp3']
		}),
		// color: '#d35400'
        shape: function () {
            var randomPoint = Point.random();
            var point = maxPoints * randomPoint;
            var circlePath = new Path.Circle(point, point/12);
            circlePath.strokeColor = getRandomColor();
            circlePath.fillColor = getRandomColor();
            circlePath.opacity = 0.1;
            var clones = 30;
            var angle = 360 / clones;
            for(var i = 0; i < clones; i++) {
                var clonedPath = circlePath.clone();
                clonedPath.rotate(angle * i, circlePath.bounds.topLeft);
                clonedPath.opacity = 0.1*(i/9);
                // clonedPath.skew(2);
                remove(clonedPath,1000);
                remove(circlePath,300);
            }
            clonedPath.scale(1.1);
            clonedPath.name="clonepath";
            decagon.push(clonedPath);
            remove(clonedPath,400);
        }
	},
	j: {
		sound: new Howl({
  		src: ['A/splits.mp3']
		}),
		// color: '#1abc9c'
        shape: function () {
            var rectangle = new Rectangle(new Point(view.center+300), new Point(view.center)-300);
            var path = new Path.Rectangle(rectangle);
            path.strokeColor = getRandomColor();
            path.name = "squarein";
            path.rotate(45);
            path.strokeWidth = 20;
            decagon.push(path);
            return path;
        }
	},
	k: {
		sound: new Howl({
  		src: ['A/squiggle.mp3']
		}),
		// color: '#2ecc71'
        shape: function (){
            var randomPoint = Point.random();
            var point = maxPoints * randomPoint;
            var dec = new Path.Circle(point, 500);
            dec.fillColor = getRandomColor();
            dec.name="circlein";
            decagon.push(dec);
            return dec;
        }
	},
	l: {
		sound: new Howl({
  		src: ['A/strike.mp3']
		}),
		// color: '#3498db'
        shape: function(){
            var deca = new Path.RegularPolygon(new Point(view.center+20, view.center), 15, 200);
            deca.fillColor = getRandomColor();
            deca.selected = true;
            deca.name="changing";
            decagon.push(deca);
        }
	},
	z: {
		sound: new Howl({
  		src: ['A/suspension.mp3']
		}),
		// color: '#9b59b6'
        shape:function(){
            init1=40;
            k=0;
            var myPath = new Path();
            myPath.strokeColor = getRandomColor();
            myPath.add(new Point(40,view.size.height/2+40));
            myPath.name = 'zigzag';
            max=20;
            myPath.strokeWidth=20;
            myPath.selected=true;
            decagon.push(myPath);


        }
	},
	x: {
		sound: new Howl({
  		src: ['A/timer.mp3']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
  		src: ['A/ufo.mp3']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
  		src: ['A/veil.mp3']
		}),
		color: '#27ae60'
	},
	b: {
		sound: new Howl({
  		src: ['A/wipe.mp3']
		}),
		color: '#2980b9'
	},
	n: {
		sound: new Howl({
			src: ['A/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	m: {
		sound: new Howl({
  		src: ['A/moon.mp3']
		}),
		color: '#2c3e50'
	}
};
var decagon=[];
function onKeyDown(event) {
    // When a key is pressed, set the content of the text item:
    data[event.key].sound.play();
    dec = data[event.key].shape();

}

function onKeyUp(event) {
    // When a key is released, set the content of the text item:
    console.log( 'The ' + event.key + ' key was released!');
    console.log(i);
}
function onFrame(event) {

    // for(var j = 0; j < decagon.length; j++){
    //     if(decagon[j].area < 1){
    //         decagon[j].remove();
    //         decagon.splice(j, 1);
    //         j--;
    //     }
    // }


    for (i = 0; i < decagon.length; i++) {
        if (decagon[i].name === 'square') {
            decagon[i].strokeColor.hue += 5;
            decagon[i].scale(1.11);
            decagon[i].rotate(14);
            if(decagon[i].area>1000000){
                remov(i,decagon[i]);
            }
        } else if (decagon[i].name === 'square2') {
            decagon[i].strokeColor.hue += 5;
            decagon[i].rotate(3);
            // decagon[i].scale(0.9);
            if(new Date().getTime() - istime >=1000) {
                remov(i, decagon[i]);
            }

        }
        else if (decagon[i].name === 'candy') {
            decagon[i].position.x += view.size.width / 30;
            if(decagon[i].position.x>view.size.width){
                remov(i,decagon[i]);
            }
        } else if (decagon[i].name === 'square3') {
            decagon[i].fillColor.hue += 5;
            decagon[i].rotate(3);
            decagon[i].scale(0.9);
            if(decagon[i].area<1){
                remov(i,decagon[i]);
            }
        }
        else if(decagon[i].name==='candyup') {

             if (decagon[i].position.x < 1000) {
                    decagon[i].position.x += Math.random() * 20;
                } else {
                    decagon[i].position.x -= Math.random() * 20;
                }
                decagon[i].position.y -= Math.random() * 80;
            if(decagon[i].position.y<0) {
                remov(i,decagon[i]);
            }
        }
        else if(decagon[i].name==='circles') {
            decagon[i].fillColor.hue += 5;
            console.log(new Date().getTime()-istime);
            if(new Date().getTime() - istime >=500) {
                remov(i, decagon[i]);
            }
        }
        else if (decagon[i].name === 'circle') {
            decagon[i].fillColor.hue += 5;
            decagon[i].scale(0.9);
            decagon[i].rotate(100);
            if(decagon[i].area<1){
                remov(i,decagon[i]);
            }
        } else if (decagon[i].name === 'stripes') {

            decagon[i].position.x -= 20;
            if(decagon[i].position.x<0){
                remov(i,decagon[i]);
            }
        } else if (decagon[i].name === 'stripes2') {

            decagon[i].position.x += 20;
            if(decagon[i].position.x>view.size.width){
                remov(i,decagon[i]);
            }
        } else if (decagon[i].name === 'tritopoly') {
            decagon[i].position.y += Math.random() * 10;
            decagon[i].position.x += Math.random() * 10;
            decagon[i].scale(1.11);
            decagon[i].fillColor.hue += 5;
            decagon[i].rotate(6);
            if(decagon[i].area<1){
                remov(i,decagon[i]);
            }
        } else if (decagon[i].name === 'lines') {
            decagon[i].scale(1.11);
            if(decagon[i].area<1){
                remov(i,decagon[i]);
            }
        }else if (decagon[i].name === 'arc') {
            decagon[i].scale(1.11);
            if(decagon[i].area<1){
                remov(i,decagon[i]);
            }
        }else if (decagon[i].name === 'ellipse') {
            decagon[i].scale(0.91);
            // decagon[i].skew(2);
            // decagon[i].rotate(3);
            decagon[i].translate(1);
            decagon[i].strokeColor.hue += 10;
            if(decagon[i].area<1){
                remov(i,decagon[i]);
            }
        }else if (decagon[i].name === 'star') {
            decagon[i].scale(0.95);
            // decagon[i].skew(2);
            decagon[i].rotate(9);
            decagon[i].translate(10);
            decagon[i].fillColor.hue += 10;
            if(decagon[i].area<1){
                remov(i,decagon[i]);
            }
        }else if (decagon[i].name === 'twocircle') {
            decagon[i].scale(1.11);
            // decagon[i].skew(2);
            decagon[i].rotate(9);
            decagon[i].translate(5);
            decagon[i].fillColor.hue += 9;
            if(decagon[i].area<1){
                remov(i,decagon[i]);
            }
        }else if (decagon[i].name === 'rotateatleft') {
            // decagon[i].scale(1.11);
            decagon[i].skew(5);
            var pt = decagon[i].bounds.bottomRight;
            decagon[i].rotate(9, pt);
            // decagon[i].rotate(9);
            decagon[i].translate(5);
            decagon[i].fillColor.hue += 9;
            if(decagon[i].area<1){
                remov(i,decagon[i]);
            }
        }else if (decagon[i].name === 'clonedpath') {
            decagon[i].scale(1.11);
            // decagon[i].skew(5f);
            decagon[i].rotate(9);
            decagon[i].translate(5);
            decagon[i].fillColor.hue += 9;
            if(decagon[i].area<1){
                remov(i,decagon[i]);
            }
        }else if (decagon[i].name === 'circlein') {
            decagon[i].fillColor.hue += 5;
            decagon[i].scale(0.9);
            decagon[i].rotate(3);
            if(decagon[i].area<1){
                remov(i,decagon[i]);
            }
        }else if (decagon[i].name === 'squarein') {
            decagon[i].strokeColor.hue += 5;
            decagon[i].scale(0.9);
            decagon[i].rotate(60);
            if(decagon[i].area<1){
                remov(i,decagon[i]);
            }
        }else if(decagon[i].name === 'changing' && isRunning===false){
            setTimeout(function(){
                isRunning=false;
            },70);
            segmentRemover(decagon[i]);
            if(decagon[i].segments.length==0){
                decagon.splice(i,1);
            }
            isRunning=true;
            console.log(isRunning);
        }else if(decagon[i].name==='zigzag'){
            init1+=100;
            if(k>max){
                remove1(decagon[i],500,i);
            }
            else if(k%2==0){

                decagon[i].add(new Point(init1,view.size.height/2-160));

                decagon[i].smooth();

                k++;
            }else{
                console.log(view.size.height/2+160);
                decagon[i].add(new Point(init1,view.size.height/2+160));
                k++;
                decagon[i].smooth();
            }

        }
    }



        // for (i = 0; i < decagon.length; i++) {
        //     decagon[i].fillColor.hue += 5;
        //     decagon[i].rotate(3);
        //     decagon[i].scale(0.9);
        // }

}

function segmentRemover(dec) {
    dec.removeSegment(0);
    isRunning=false;
    dec.fillColor.hue+=10;
}

function remove(path,time,i){
    setTimeout(function(){path.remove();},time);
}
function remove1(path,time,i){
    setTimeout(function(){path.remove();},time);
    decagon.splice(i,1);
}
function remov(index,dec){
    console.log('remove Entered');
    decagon.splice(i,1);
    dec.remove();
}



