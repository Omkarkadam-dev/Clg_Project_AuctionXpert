document.addEventListener("DOMContentLoaded", function () {
    const profileBtn = document.querySelector(".profile-btn");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // Toggle dropdown menu on click
    profileBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdownMenu.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!profileBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Dummy data for statistics
    const totalAuctions = 120;
    const totalUsers = 500;
    const totalBids = 3500;
    const totalRevenue = 1250000;

    // Function to animate counters
    function animateCounter(id, start, end, duration) {
        let range = end - start;
        let current = start;
        let increment = range / (duration / 10);
        let element = document.getElementById(id);
        
        let timer = setInterval(() => {
            current += increment;
            element.textContent = Math.floor(current);
            if (current >= end) {
                element.textContent = end;
                clearInterval(timer);
            }
        }, 10);
    }

    // Animate all counters
    animateCounter("total-auctions", 0, totalAuctions, 2000);
    animateCounter("total-users", 0, totalUsers, 2000);
    animateCounter("total-bids", 0, totalBids, 2000);
    animateCounter("total-revenue", 0, totalRevenue, 2000);
});


document.addEventListener("DOMContentLoaded", function () {
    const pauseButtons = document.querySelectorAll(".pause-auction");
    const resumeButtons = document.querySelectorAll(".resume-auction");
    const endButtons = document.querySelectorAll(".end-auction");

    // Event Listeners for Auction Actions
    pauseButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            alert(`Auction ${index + 1} paused!`);
        });
    });

    resumeButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            alert(`Auction ${index + 1} resumed!`);
        });
    });

    endButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            alert(`Auction ${index + 1} ended!`);
        });
    });

    // Simulating Live Bidding Updates
    function updateBids() {
        const bids = document.querySelectorAll(".current-bid");
        bids.forEach(bid => {
            let currentBid = parseInt(bid.textContent.replace("₹", "").replace(",", ""));
            let newBid = currentBid + Math.floor(Math.random() * 5000);
            bid.textContent = `₹${newBid.toLocaleString()}`;
        });
    }

    // Update bids every 10 seconds
    setInterval(updateBids, 10000);
});



document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchUser");
    const filterRole = document.getElementById("filterRole");
    const userList = document.getElementById("userList");
    const users = Array.from(userList.getElementsByTagName("tr"));

    // Search Function
    searchInput.addEventListener("input", function () {
        const query = this.value.toLowerCase();
        users.forEach(row => {
            const name = row.getElementsByTagName("td")[0].innerText.toLowerCase();
            row.style.display = name.includes(query) ? "" : "none";
        });
    });

    // Filter by Role
    filterRole.addEventListener("change", function () {
        const role = this.value;
        users.forEach(row => {
            const userRole = row.getElementsByTagName("td")[2].innerText.toLowerCase();
            row.style.display = (role === "all" || userRole === role) ? "" : "none";
        });
    });

    // Action Buttons
    document.querySelectorAll(".edit-user").forEach(button => {
        button.addEventListener("click", function () {
            alert("Edit user functionality coming soon!");
        });
    });

    document.querySelectorAll(".block-user").forEach(button => {
        button.addEventListener("click", function () {
            this.closest("tr").querySelector(".status").classList.toggle("inactive");
        });
    });

    document.querySelectorAll(".delete-user").forEach(button => {
        button.addEventListener("click", function () {
            this.closest("tr").remove();
        });
    });
});
