TITLE("RCPD Waves test"); //Title to be shown at top of Window
EMAIL("acn.norman@radley.org.uk");

//1st Section heading
S("Standing waves","Multiple choice test");    // This heading will be shown along with each question in this section. The second string ".." is in smaller type.

//1 A multiple choice Question (the students chooses just one of the options as correct)
Q(MCQ,"The diagrams show cross sections through water waves at a particular instant.  Which set of graphs does not show the correct resultant wave 1 + wave 2?"); 
IMG("./img/sw-waterwaves-resultants.png");
MC("A");
MC("B");
MC("C");
MC("D");
A(4,"Yes, this is the right answer");  // the correct answer is the fourth option listed above
I(2,"The two waves add to give zero in this position, so this <strong>is</strong> showing correct superposition.  Did you read the question correctly?"); // this picks up a particular incorrect response (option 2) and gives a special explanation when it is chosen.
I(1,"Because the two waves are nearly in phase, they give a bigger resultant wave, so this <strong>is</strong> showing correct superposition.  Did you read the question correctly?"); 
I(2,"Because the two waves are nearly out of phase, they give a smaller wave, so this <strong>is</strong> showing correct superposition.  Did you read the question correctly?"); 
C("The principle of superposition says that the resultant is the sum of the contributing waves at each position.");

//2 A multiple choice Question (the students chooses just one of the options as correct)
Q(MCQ,"The following diagrams show cross sections through water waves at a particular instant. If the waves are moving from left to right, in which set of graphs is Wave 1 leading Wave 2 by 90 degrees?"); 
IMG("./img/sw-waterwaves.png");
MC("A");
MC("B");
MC("C");
MC("D");
A(1,"Well done");  // the correct answer is the second option listed above
I(2,"No - these waves are 180 degrees out of phase."); // this picks up a particular incorrect response and gives a special explanation when it is chosen.
I(4,"No - these waves are almost exactly 180 degrees out of phase."); // this picks up a particular incorrect response and gives a special explanation when it is chosen.

//3 A multiple choice Question (the students chooses just one of the options as correct)
Q(MCQ,"A glass tube is slowly drained of water until the sound produced by a vibrating tuning fork is a maximum. This occurs when L is 15 cm. The water is drained further until the next point at which the sound made by the tuning fork is at a maximum. This occurs when L is 45 cm.  What is the speed of sound in the tube?"); 
IMG("./img/sw-waterdraining.png");
MC("A: 614 ms<sup>-1</sup>");
MC("B: 307 ms<sup>-1</sup>");
MC("C: 153 ms<sup>-1</sup>");
MC("D: 225 ms<sup>-1</sup>");
MC("E: 72 ms<sup>-1</sup>");
A(2);  // the correct answer is the second option listed above

//4 A multiple choice Question (the students chooses just one of the options as correct)
Q(MCQ,"A glass tube is slowly drained of water until the sound produced by a vibrating tuning fork is a maximum. This occurs when L is 15 cm. The water is drained further until the next point at which the sound made by the tuning fork is at a maximum. This occurs when L is 45 cm. At what length will there be another maximum sound?");
IMG("./img/sw-waterdraining.png");
MC("A: 60 cm");
MC("B: 65 cm");
MC("C: 70 cm");
MC("D: 75 cm");
MC("E: 90 cm");
A(4);  // the correct answer is the second option listed above

//5 A multiple choice Question (the students chooses just one of the options as correct)
Q(MCQ,"Steven is setting up his stereo speakers. He positions them 4.5 m apart. He plays a pure note from his synthesiser of frequency 440 Hz through the speakers. He has measured the speed of sound in his room to be 330 ms<sup>-1</sup>. As he walks from one speaker to the other, he notices that the sound goes repeatedly from loud to quiet and back to loud. What is the name given to these quiet regions?"); 
MC("A: Nodes");
MC("B: Antinodes");
MC("C: White Noise");
MC("D: Cold Spots");
A(1);  // the correct answer is the second option listed above

//6 A multiple choice Question (the students chooses just one of the options as correct)
Q(MCQ,"Steven is setting up his stereo speakers. He positions them 4.5 m apart. He plays a pure note from his synthesiser of frequency 440 Hz through the speakers. He has measured the speed of sound in his room to be 330 ms<sup>-1</sup>. As he walks from one speaker to the other, he notices that the sound goes repeatedly from loud to quiet and back to loud.  How far apart are these quiet regions?"); 
MC("A: 37.5 cm");
MC("B: 66.5 cm");
MC("C: 75 cm");
MC("D: 133 cm");
MC("E: 150 cm");
A(1);  // the correct answer is the second option listed above

//7 A multiple choice Question (the students chooses just one of the options as correct)
Q(MCQ,"The velocity of a wave down a guitar string is given by the formula <br /> <math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mstyle scriptlevel='0' displaystyle='true'><mrow><mfrac linethickness='1'><mi>T</mi><mi>m</mi></mfrac></mrow></mstyle></mrow></msqrt></mrow></math>, where <em>T</em> is the tension in the string and <em>m</em> is the mass per unit length of the string in kg m<sup>-1</sup>. The top E string on a guitar has a total mass of 0.208 g and is stretched to a tension of 226 N. The total length of the string is 62.8 cm. The velocity of the wave down this string would be about:"); 
MC("A: 346 ms<sup>-1</sup>");
MC("B: 576 ms<sup>-1</sup>");
MC("C: 633 ms<sup>-1</sup>");
MC("D: 826 ms<sup>-1</sup>");
MC("E: 1042 ms<sup>-1</sup>");
A(4);  // the correct answer is the second option listed above

//8 A multiple choice Question (the students chooses just one of the options as correct)
Q(MCQ,"A guitar string is 75 cm long between the bridge and the nut, shown in the diagram vibrating in its fundamental mode. If the speed of a transverse wave in this string is 850 ms<sup>-1</sup> at what frequency will the string vibrate in its third harmonic? (NB the fundamental is also known as the first harmonic.)<br />"); 
IMG("./img/sw-guitar75cm.png");
MC("A: 566 Hz");
MC("B: 840 Hz");
MC("C: 1160 Hz");
MC("D: 1700 Hz");
MC("E: 1133 Hz");
A(4);  // the correct answer is the second option listed above
C("For the third harmonic, there will be three nodes in between the bridge and the nut.");

//9 A multiple choice Question (the students chooses just one of the options as correct)
Q(MCQ,"The diagram shows the wave pattern for resonance in a closed tube when a speaker emitting a frequency <em>f</em> is placed above. The wave starts a small distance <em>e</em> above the tube.  What is the formula for the velocity of the wave down the tube?");
IMG("./img/sw-closedtube.png");
MC("A: <math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>v</mi><mo>=</mo><mn>4f</mn><mrow><mo rspace='0.3em' lspace='0em' stretchy='true' fence='true' form='prefix'>\(</mo><mi>L</mi><mo>+</mo><mi>e</mi><mo rspace='0em' lspace='0.3em' stretchy='true' fence='true' form='postfix'>\)</mo></mrow></mrow></math>");
MC("B: <math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>v</mi><mo>=</mo><mstyle scriptlevel='0' displaystyle='true'><mrow><mfrac linethickness='1'><mrow><mi>L</mi><mo>+</mo><mi>e</mi></mrow><mn>4f</mn></mfrac></mrow></mstyle></mrow></math>");
MC("C: <math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>v</mi><mo>=</mo><mn>4f</mn><mi>L</mi><mo>+</mo><mi>e</mi></mrow></math>");
MC("D: <math xmlns='http://www.w3.org/1998/Math/MathML'><mrow><mi>v</mi><mo>=</mo><mstyle scriptlevel='0' displaystyle='true'><mrow><mfrac linethickness='1'><mrow><mn>4f</mn><mo>+</mo><mi>e</mi></mrow><mi>L</mi></mfrac></mrow></mstyle></mrow></math>");
A(1);  // the correct answer is the second option listed above

//10 A multiple choice Question (the students chooses just one of the options as correct)
Q(MCQ,"The diagram below shows the wave pattern for resonance in a closed tube when a speaker emitting a frequency <em>f</em> is placed above. The wave starts a small distance <em>e</em> above the tube. The loudspeaker has a very low frequency signal fed into it that is gradually increased until resonance occurs. The frequency is increased several times more, obtaining several other values of resonant frequencies. If the speed of sound is 360 ms<sup>-1</sup>, <em>L</em> is 90 cm and <em>e</em> is 2 cm, the frequencies where resonance occurs will be around:"); 
IMG("./img/sw-closedtube.png");
MC("A: 98 Hz, 196 Hz, 392 Hz");
MC("B: 98 Hz, 293 Hz, 489 Hz");
MC("C: 96 Hz, 192 Hz, 384 Hz");
MC("D: 96 Hz, 288 Hz, 480 Hz");
A(2);  // the correct answer is the second option listed above
