"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative pb-32 pt-10 px-6 md:px-20 bg-brand-bg -mt-48 md:-mt-96 z-20">
      <div className="max-w-[80%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glow-card bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Background Blob */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/10 rounded-full blur-[100px] pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-brand-teal"></span>
            About Me
          </h2>
          
          <div className="text-lg md:text-xl text-gray-300 leading-relaxed font-light space-y-6">
            <p>
              I’m a <span className="text-brand-teal font-medium drop-shadow-[0_0_8px_rgba(0,255,204,0.3)]">Data Engineer</span> with an <span className="text-brand-teal font-medium">M.S.</span> in <span className="text-brand-teal font-medium">Computer Science</span> from the <span className="text-brand-teal font-medium">University of Texas at Dallas</span>, specializing in building <span className="text-white font-medium">scalable data platforms</span> and <span className="text-white font-medium">end-to-end data pipelines</span> in <span className="text-white font-medium">cloud environments</span>. I design and implement modern data architectures across <span className="text-white font-medium">Azure</span> and <span className="text-white font-medium">AWS</span>, leveraging technologies such as <span className="text-white font-medium">Spark, Databricks, Snowflake, DBT, and Airflow</span> to transform raw data into reliable, <span className="text-white font-medium">analytics-ready systems</span>.
            </p>
            <p>
              My work focuses on building <span className="text-white font-medium">production-grade data pipelines</span>, designing efficient <span className="text-white font-medium">data warehouses</span>, and enabling advanced data analytics that support data-driven decision making. I have hands-on experience architecting large-scale <span className="text-brand-purple font-medium drop-shadow-[0_0_8px_rgba(123,97,255,0.3)]">ETL systems</span>, <span className="text-brand-purple font-medium drop-shadow-[0_0_8px_rgba(123,97,255,0.3)]">streaming pipelines</span>, and cloud-native data infrastructure that process millions of records efficiently while ensuring high data quality and reliability.
            </p>
            <p>
              Along with engineering robust data systems, I also work closely with data analysis and business intelligence, building analytical datasets, dashboards, and <span className="text-brand-teal font-medium drop-shadow-[0_0_8px_rgba(0,255,204,0.3)]">KPI-driven insights</span> that help organizations understand performance and make informed strategic decisions.
            </p>
            <p>
              With a strong foundation in <span className="text-white font-medium">distributed systems</span>, <span className="text-white font-medium">big data technologies</span>, and modern data analytics, I enjoy solving complex engineering challenges at the intersection of <span className="text-white font-medium">data infrastructure</span>, <span className="text-white font-medium">analytics</span>, and <span className="text-white font-medium">scalable data platforms</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
