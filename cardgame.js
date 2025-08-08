/*

CardGame.js contains methods
1. Deck - call to have a deck (array) of 52 Cards returned
2. shuffle - random method used to return cards in random order
v
a
r
 
P
L
A
Y
E
R
S
 
=
 
4
;




v
a
r
 
s
u
i
t
e
s
 
=
 
[
"
s
p
a
d
e
s
"
,
"
d
i
a
m
o
n
d
s
"
,
"
h
e
a
r
t
s
"
,
"
c
l
u
b
s
"
]
;


v
a
r
 
c
a
r
d
s
 
=
 
[
2
,
3
,
4
,
5
,
6
,
7
,
8
,
9
,
1
0
,
1
1
,
1
2
,
1
3
,
1
4
]
;




f
u
n
c
t
i
o
n
 
D
e
c
k
(
)
{


	
v
a
r
 
r
d
e
c
k
 
=
 
[
]
;




	
c
o
n
s
o
l
e
.
l
o
g
(
t
h
i
s
.
r
d
e
c
k
)




	
s
u
i
t
e
s
.
f
o
r
E
a
c
h
(
f
u
n
c
t
i
o
n
(
s
u
i
t
e
)
{


	
	
c
a
r
d
s
.
f
o
r
E
a
c
h
(
f
u
n
c
t
i
o
n
(
c
a
r
d
)
{


	
	
	
c
o
n
s
o
l
e
.
l
o
g
(
"
B
u
i
l
d
i
n
g
 
"
+
s
u
i
t
e
 
+
 
"
 
:
 
"
 
+
 
c
a
r
d
 
)
;




	
	
	
r
d
e
c
k
.
p
u
s
h
(
n
e
w
 
C
a
r
d
(
s
u
i
t
e
,
c
a
r
d
)
)


	
	
	
c
o
n
s
o
l
e
.
l
o
g
(
r
d
e
c
k
)
		});
	});
}
			})
		})

		
	

	this.shuffle = function(){
		var i = 0, j = 0, temp = null;
		for (i = rdeck.length - 1; i > 0; i -= 1) {
		    j = Math.floor(Math.random() * (i + 1))
		    temp = rdeck[i]
		    rdeck[i] = rdeck[j]
		    rdeck[j] = temp
		}
		
	}

	this.nextCard = function(){
		return rdeck.pop();
	}

	
	this.shuffle()

	return this;
}


function Card(suite,number){
	this.suite = suite;
	this.number = number;
	this.altLabel = number;
	if(this.number > 10){
		if(number == 11){
			this.altLabel = "J";
		}else if(number == 12){
			this.altLabel = "Q";
		} else if(number == 13){
			this.altLabel = "K";
		} else if(number == 14){
			this.altLabel = "A"
		}
	}
	this.toString = function(){

		return this.altLabel;
	}

	console.log(this.toString())
	return this;
}

var currentDeck = new Deck();
