import { registry } from "@web/core/registry";
import { rpc } from "@web/core/network/rpc";
import { memoize } from "@web/core/utils/functions";

async function fetchLatestLead() {
  const domain = [["id", "!=", false]]; // Define your domain for filtering records
  const fields = ["id", "name", "contact_name", "email_from"]; // Define fields to fetch

  console.log("Fetching latest lead...");

  try {
    const result = await rpc({
      model: "crm.lead", // CRM Lead model
      method: "search_read", // Search and read method
      args: [domain, fields], // Pass domain and fields
      kwargs: {
        limit: 1, // Fetch only the latest record
        order: "id desc", // Order by ID in descending to get the latest
      },
    });

    console.log("Latest Lead:", result);
    return result;
  } catch (error) {
    console.error("Error fetching latest lead:", error);
  }
}

export const dashboardCacheService = {
  async: ["loadStatistics", "loadLatestLead"],
  start() {
    return {
      loadStatistics: memoize(() => rpc("/awesome_dashboard/statistics")),
      loadLatestLead: memoize(() => rpc("/awesome_dashboard/latest_leads")),
    };
  },
};

registry
  .category("services")
  .add("awesome_dashboard.statistics", dashboardCacheService);
