export const metadata = {
    title: "Admin Dashboard | MAK Auditorium",
};

export default function AdminDashboardPage() {
    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-serif text-primary">Overview</h1>
                <p className="text-primary/60 mt-1">Manage all your venue booking enquiries and metrics.</p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-primary/10">
                    <h3 className="text-sm font-medium text-primary/60 uppercase tracking-widest">Total Enquiries</h3>
                    <p className="text-4xl font-serif text-primary mt-2">12</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-primary/10">
                    <h3 className="text-sm font-medium text-primary/60 uppercase tracking-widest">Pending Tours</h3>
                    <p className="text-4xl font-serif text-accent mt-2">5</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-primary/10">
                    <h3 className="text-sm font-medium text-primary/60 uppercase tracking-widest">Confirmed Events</h3>
                    <p className="text-4xl font-serif text-primary mt-2">3</p>
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-lg shadow-sm border border-primary/10 overflow-hidden">
                <div className="p-6 border-b border-primary/10 flex items-center justify-between">
                    <h2 className="text-xl font-serif text-primary">Recent Enquiries</h2>
                    <button className="text-sm outline-none px-4 py-2 border border-primary/20 text-primary hover:bg-secondary transition-colors rounded-sm">
                        Export CSV
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-secondary/50 text-primary/60 uppercase tracking-wider text-xs">
                            <tr>
                                <th className="px-6 py-4 font-medium">Name</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Event Type</th>
                                <th className="px-6 py-4 font-medium">Guests</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-primary/5 text-primary/80">
                            {/* Mock Data Row 1 */}
                            <tr className="hover:bg-secondary/30 transition-colors">
                                <td className="px-6 py-4">
                                    <p className="font-medium text-primary">Muhammed Ali</p>
                                    <p className="text-primary/50 text-xs">+91 98765 43210</p>
                                </td>
                                <td className="px-6 py-4">Oct 15, 2026</td>
                                <td className="px-6 py-4">Wedding</td>
                                <td className="px-6 py-4">800</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                        New
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-accent hover:text-primary transition-colors text-xs uppercase tracking-widest font-medium">
                                        Review
                                    </button>
                                </td>
                            </tr>
                            {/* Mock Data Row 2 */}
                            <tr className="hover:bg-secondary/30 transition-colors">
                                <td className="px-6 py-4">
                                    <p className="font-medium text-primary">Sarah Williams</p>
                                    <p className="text-primary/50 text-xs">+91 99887 76655</p>
                                </td>
                                <td className="px-6 py-4">Nov 22, 2026</td>
                                <td className="px-6 py-4">Corporate</td>
                                <td className="px-6 py-4">300</td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        Contacted
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-accent hover:text-primary transition-colors text-xs uppercase tracking-widest font-medium">
                                        Review
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
