const totalConfirmedBerths = 63;
const totalRACBerths = 9;
const totalWaitingListBerths = 10;

let bookedTickets = [];
let RACTickets = [];
let waitingListTickets = [];

function bookTicket() {
    const name = prompt("Enter passenger name:");
    const age = parseInt(prompt("Enter passenger age:"), 10);
    const gender = prompt("Enter passenger gender (male/female):");
    const berthPreference = prompt("Enter berth preference (e.g., Lower, Side-Lower):");

    // Check conditions for booking
    if (age < 5) {
        console.log("Children below 5 years are not eligible for booking.");
        return;
    }

    if (waitingListTickets.length > totalWaitingListBerths) {
        console.log("No tickets available.");
        return;
    }

    let ticket = {
        name,
        age,
        gender,
        berthPreference,
    };

    // Assign berth based on conditions
    if (age > 60 || (gender === 'female' && age > 0)) {
        // Assign lower berth for senior citizens and ladies with children
        ticket.berth = 'Lower';
    } else if (RACTickets.length < totalRACBerths) {
        // Assign side-lower berth for RAC passengers
        ticket.berth = 'Side-Lower';
        RACTickets.push(ticket);
    } else {
        // Assign confirmed berth
        ticket.berth = 'Confirmed';
        bookedTickets.push(ticket);
    }

    console.log(`Ticket booked successfully. Berth: ${ticket.berth}`);
}

function cancelTicket() {
    if (bookedTickets.length === 0) {
        console.log("No booked tickets to cancel.");
        return;
    }

    // Simulate cancellation by removing the first booked ticket
    let cancelledTicket = bookedTickets.shift();

    // Move a ticket from waiting list to RAC
    if (waitingListTickets.length > 0) {
        let movedToRAC = waitingListTickets.shift();
        RACTickets.push(movedToRAC);
        console.log(`Ticket cancelled. Berth: ${cancelledTicket.berth}. Ticket from waiting list moved to RAC.`);
    } else {
        console.log(`Ticket cancelled. Berth: ${cancelledTicket.berth}. No ticket available in waiting list to move to RAC.`);
    }
}

function printBookedTickets() {
    console.log("Booked Tickets:");
    bookedTickets.forEach((ticket, index) => {
        console.log(`${index + 1}. Name: ${ticket.name}, Age: ${ticket.age}, Gender: ${ticket.gender}, Berth: ${ticket.berth}`);
    });
    console.log(`Total booked tickets: ${bookedTickets.length}`);
}

function printAvailableTickets() {
    console.log("Available Tickets:");
    RACTickets.forEach((ticket, index) => {
        console.log(`${index + 1}. Name: ${ticket.name}, Age: ${ticket.age}, Gender: ${ticket.gender}, Berth: ${ticket.berth}`);
    });
    waitingListTickets.forEach((ticket, index) => {
        console.log(`${RACTickets.length + index + 1}. Name: ${ticket.name}, Age: ${ticket.age}, Gender: ${ticket.gender}, Berth: Waiting List`);
    });
    console.log(`Total available tickets: ${RACTickets.length + waitingListTickets.length}`);
}

// Example usage:
let continueOperation = true;

while (continueOperation) {
    const choice = parseInt(prompt("Choose an option:\n1. Book Ticket\n2. Cancel Ticket\n3. Print Booked Tickets\n4. Print Available Tickets\n5. Exit"), 10);

    switch (choice) {
        case 1:
            bookTicket();
            break;
        case 2:
            cancelTicket();
            break;
        case 3:
            printBookedTickets();
            break;
        case 4:
            printAvailableTickets();
            break;
        case 5:
            continueOperation = false;
            console.log("Exiting the program.");
            break;
        default:
            console.log("Invalid choice. Please choose a valid option.");
    }
}
