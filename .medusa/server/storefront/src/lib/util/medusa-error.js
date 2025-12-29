"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = medusaError;
function medusaError(error) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const u = new URL(error.config.url, error.config.baseURL);
        console.error("Resource:", u.toString());
        console.error("Response data:", error.response.data);
        console.error("Status code:", error.response.status);
        console.error("Headers:", error.response.headers);
        // Extracting the error message from the response data
        const message = error.response.data.message || error.response.data;
        throw new Error(message.charAt(0).toUpperCase() + message.slice(1) + ".");
    }
    else if (error.request) {
        // The request was made but no response was received
        throw new Error("No response received: " + error.request);
    }
    else {
        // Something happened in setting up the request that triggered an Error
        throw new Error("Error setting up the request: " + error.message);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkdXNhLWVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3RvcmVmcm9udC9zcmMvbGliL3V0aWwvbWVkdXNhLWVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOEJBcUJDO0FBckJELFNBQXdCLFdBQVcsQ0FBQyxLQUFVO0lBQzVDLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25CLG1FQUFtRTtRQUNuRSxxQ0FBcUM7UUFDckMsTUFBTSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN6RCxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUN4QyxPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDcEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNwRCxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRWpELHNEQUFzRDtRQUN0RCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUE7UUFFbEUsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUE7SUFDM0UsQ0FBQztTQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLG9EQUFvRDtRQUNwRCxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMzRCxDQUFDO1NBQU0sQ0FBQztRQUNOLHVFQUF1RTtRQUN2RSxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNuRSxDQUFDO0FBQ0gsQ0FBQyJ9