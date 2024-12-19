Overview


Use the average write rate for the virtual machines in a VPG in the Zerto WAN Calculator to estimate the minimum bandwidth required.

For each VM you also must decide whether compression will be enabled for the VM, based on the data characteristics.

Note: The minimum dedicated bandwidth must always be at least 5 Mb/sec.

How to Use

To estimate the required bandwidth for your vSphere replication setup, follow the procedure below, either using the Zerto WAN Sizing Calculator or calculating manually.
Estimating Bandwidth Using the Zerto WAN Sizing Calculator

"https://alefreza.github.io/Zerto-Bandwidth-Calculator/"  

    Enter the Information for Each Virtual Machine (VM):
        VM Name: Enter the name of the virtual machine in the designated field.
        Write KB/s Data: Input the write KB/s data based on statistics gathered for the VM. Be sure to use a period as the decimal separator.
        Compression Enabled?: Decide whether compression will be enabled for the VM, based on the VM’s data characteristics. Choose "Yes" or "No".
        Application Data Characteristics: Select the appropriate option for your data. Choose either Compressed or Compressible, depending on how the data behaves.

    Check Compression Warnings:
        The Zerto WAN Sizing Estimator will highlight cells in red if compression is applied to compressible data, and in orange if compression is not applied to compressible data. Pay attention to these warnings to ensure optimal settings for your environment.

    Estimate the Total Bandwidth:
        The Zerto WAN Sizing Estimator will automatically calculate the total required bandwidth for your deployment, with a minimum value of 5 Mb/sec.
      

Estimating Bandwidth Without the Zerto WAN Sizing Calculator

If you prefer to manually calculate the required WAN bandwidth, follow these steps:

    For Each VM in the Virtual Protection Group (VPG):
        Multiply the KB/sec value (obtained from the statistics) by 8 to convert from KB to bits per second.
        Then divide the result by 1024 to convert from bits to Megabits (Mb).
        If Compression is Enabled and the data is Compressible, divide the result by 2 to account for the compression ratio.

    Sum the Results for All VMs:
        After calculating the bandwidth for each VM, sum all the results to estimate the total required WAN bandwidth.



Contributions

If you want to contribute to this project, feel free to fork the repository and submit a pull request. Before contributing, please ensure your changes align with the tool's functionality and overall user experience. License

This tool is licensed under the MIT License. See the LICENSE file for more details. Contact

For any inquiries or suggestions, please contact us at [https://www.linkedin.com/in/amirreza-damghanian].
