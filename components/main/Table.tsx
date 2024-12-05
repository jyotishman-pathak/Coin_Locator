import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import { demoData } from "@/lib/data"
  import React from 'react'
  
  const List = () => {
    return (
      <div className="container mx-auto px-4 my-8">
        <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
    <TableHead className="w-[100px]">Logo</TableHead>
<TableHead>Name</TableHead>
<TableHead>Blockchain</TableHead>
<TableHead>Market Cap (MCAP)</TableHead>
<TableHead>24h Change</TableHead>
<TableHead>Launch Date</TableHead>
<TableHead>Tier Level</TableHead>
<TableHead>Vote Count</TableHead>
<TableHead className="text-right">Watchlisted</TableHead>

    </TableRow>
  </TableHeader>
  <TableBody>
  {demoData.map((data, key) => (
      <TableRow key={key}>
        <TableCell className="font-medium">
          <img src={data.logo} alt={`${data.name} logo`} width="40" height="40" />
        </TableCell>
        <TableCell>{data.name}</TableCell>
        <TableCell>{data.blockchain}</TableCell>
        <TableCell>{data.mcap}</TableCell>
        <TableCell>{data.change24h}</TableCell>
        <TableCell>{data.launchDate}</TableCell>
        <TableCell>{data.tier}</TableCell>
        <TableCell>{data.voteCount}</TableCell>
        <TableCell className="text-right">
          {data.watchlisted ? "✔️" : "❌"}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

      </div>
    )
  }
  
  export default List
  