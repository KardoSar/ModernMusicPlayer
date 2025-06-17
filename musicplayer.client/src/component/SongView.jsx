import React, { useState, useEffect, useMemo } from 'react';
import CoverArts from './MetaData.js';
import './SongView.css';
import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from "@tanstack/react-table";


const columnHelper = createColumnHelper();

const Songs = () => {

    const [songs, setSongs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('songs')
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setSongs(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch songs.", err);
                setIsLoading(false);
            });
    }, []);

    const cols = useMemo(() => [
        columnHelper.accessor('title', {
            header: 'Title',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('artist', {
            header: 'Artist',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('genre', {
            header: 'Genre',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('album', {
            header: 'Album',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('releaseDate', {
            header: 'Release Date',
            cell: info => new Date(info.getValue()).toLocaleDateString(),
        }),
    ], []);

    const table = useReactTable({
        data: songs,
        columns: cols,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <main>
            <div className="tableContainer">
                {
                    isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        <table className="song-table">
                            <thead className="table-head">
                                {table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id} className = "table-row">
                                        {headerGroup.headers.map(header => (
                                            <th key={header.id}>
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody>
                                {table.getRowModel().rows.map(row => (
                                    <tr key={row.id} className = "table-row">
                                        {row.getVisibleCells().map(cell => (
                                            <td key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                }
            </div>
        </main>
    );
};

//(songs.length > 0) ? songs.map((song) => <h3 key={song.id}>{song.title}</h3>) : <div>Loading...</div>

export default Songs;