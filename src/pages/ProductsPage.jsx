import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import Header from "../components/Common/Header";
import StatCard from "../components/Common/StatCard";
import { motion } from 'framer-motion';
import CategoryDistributedChart from "../components/Overview/CategoryDistributedChart";
import SalesTrandChart from "../components/Products/SalesTrandChart";
import ProductTable from "../components/Products/ProductTable";


const ProductsPage = () => {
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <Header title="Products"></Header>
            <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
                {/* STATS */}
                <motion.div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard
                        name="Total Products" icon={Package} value="1234" color='#6366F1'
                    >

                    </StatCard>
                    <StatCard
                        name="Top Selling" icon={TrendingUp} value="89" color='#10B981'
                    >

                    </StatCard>
                    <StatCard
                        name="Low Stock" icon={AlertTriangle} value="23" color='#F59E0B'
                    >

                    </StatCard>
                    <StatCard
                        name="Total Revenue Rate" icon={DollarSign} value="$54,63,656" color='#EF4444'
                    >

                    </StatCard>

                </motion.div>

                {/* Product Tables */}

                <ProductTable>
                    
                </ProductTable>

                {/* CHARTS */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <SalesTrandChart></SalesTrandChart>

                    <CategoryDistributedChart>
                    </CategoryDistributedChart>


                </div>
            </main>

        </div>
    );
};

export default ProductsPage;