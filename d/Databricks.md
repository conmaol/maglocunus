# Databricks

Some data processing history:
- Before 2007, companies just did **single-machine** data processing (in SQL, Python or Java).
- But then, 2007 marked the dawn of the **big data** era:
  - Datasets were becoming really big – terabytes rather than just gigabytes.
  - Datasets were becoming really diverse – including unstructured data likes images, videos and PDFs.
  - These big, diverse datasets could not be processed quickly and reliably on a single machine, no matter how big and fast that machine was.
  - Single-machine data processing did not scale.
- The solution to this scalability problem was **distributed** data processing, ie. <mark>Hadoop</mark> (Google):
  - Datasets are split across multiple machines and processed in parallel (cf. ‘divide-and-conquer’).
  - **Map Reduce** is used to collect the partial results fromm each machine and compile them into a final result.
  - This made data processing much more scalable and reliable.
- However, in Hadoop, every machine still had to read data from and write data to **disk**:
  - This was still too slow.
- The solution to this problem was **in-memory** distributed data processing, ie. <mark>Apache Spark</mark> (UC Berkeley):
  - Spark sped up Hadoop by keeping data in memory as far as possible.
- However, Spark was designed to be used by specialist data engineers, using Scala and Java.
  - The new army of **data scientists** being churned out by the universities only wanted to use **Python** libraries like Pandas, Numpy, SciKit-learn.
- The solution to this accessibility problem was <mark>PySpark</mark>:
  - PySpark allowed data scientists to interact with Spark using Python (Pandas dataframes etc).

But operationalising this data processing stack in real projects was a nightmare.











----

Back up to: [Top](../index.md)
