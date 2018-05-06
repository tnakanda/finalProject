# finalProject
Tahsin Akanda
Professor Versoza
CSCI-UA 480 
Spring 2018

Purpose: Over time, I have often found myself sifting through text-based lists on my phone to determine what place to eat at next. Why not create a web-based interface that I can reference and simply update potential venues from the palm of my hand? 

Advantages of this setup: 
1. Web-based interface (upon deployment to web host that is not cims)
2. Inclusion of both Zagat and Michelin data
3. Limitations of ratings/score fields to numbers, only

Modifications from Initial Propositon: 
1. Not parsing data from Zagat and Michelin; Google has been restructuring Zagat since its acquisition, so parsing the body may not be useful in the future
2. Manual entry of desired venues vs. opening up multiple tabs for Zagat and Michelin cross-references (as an alternative to the above change in 1)

Use Cases: 
1. User inputs individual data
2. User shares website for others to input desired data
3. User analzyes data from MongoDB back-end
4. User may add another field to note who added a certain listing

Installation: 
1. Clone the repository
2. Command; run npm install

Usage
1. Run the following command in the folder with all the cloned assets; npm run dev
2. Navigate to localhost:3000 in your browser
3. Use!
