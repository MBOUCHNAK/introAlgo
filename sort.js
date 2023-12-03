

// Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.
//  Each time we take a new card we put it in the right place in our hand. 

// 1 Each time work only with the first i-1 element from of the array
// 2 Pick element arr[i] and insert it into sorted sequence in the array from 0 to i-1.

//  Checkpoint Criteria

// Use of 2 counters
// GitHub repository with Readme file filled
// Documentation & Clarity of the code

function sortCards (arrayOfcards, newCard) {
    arrayOfcards.push(newCard);
    arrayOfcards.sort((a, b) => a - b);
    arrayOfcards.pop()
    console.log(arrayOfcards);
    

}
let handOfCards = [4, 3, 6, 9, 2]

sortCards(handOfCards, 5);