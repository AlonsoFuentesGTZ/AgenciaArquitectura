// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CircularProgress,
    Button,
    Stack,
} from '@mui/material';
import { getProjects } from '../services/api';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('Todos');

    useEffect(() => {
        getProjects()
            .then((res) => {
                setProjects(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const total = projects.length;
    const completados = projects.filter(p => p.status === 'Completado').length;
    const enProgreso = projects.filter(p => p.status === 'En progreso').length;

    const filteredProjects = projects.filter((p) => {
        if (filter === 'Todos') return true;
        return p.status === filter;
    });

    const stats = [
        {
            label: 'Total de Proyectos',
            value: total,
            icon: <AssignmentIcon fontSize="large" />,
        },
        {
            label: 'En Progreso',
            value: enProgreso,
            icon: <WorkIcon color="warning" fontSize="large" />,
        },
        {
            label: 'Completados',
            value: completados,
            icon: <CheckCircleIcon color="success" fontSize="large" />,
        },
    ];

    if (loading) {
        return <CircularProgress sx={{ display: 'block', margin: '40px auto' }} />;
    }

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Dashboard de Proyectos
            </Typography>

            {/* Estadísticas */}
            <Grid container spacing={3}>
                {stats.map((stat, idx) => (
                    <Grid item xs={12} sm={4} key={idx}>
                        <Card>
                            <CardContent sx={{ textAlign: 'center' }}>
                                {stat.icon}
                                <Typography variant="h5" sx={{ mt: 1 }}>
                                    {stat.value}
                                </Typography>
                                <Typography color="textSecondary">{stat.label}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Filtros */}
            <Typography variant="h6" sx={{ mt: 4 }}>
                Filtrar por estado:
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 3 }}>
                {['Todos', 'En progreso', 'Completado'].map((estado) => (
                    <Button
                        key={estado}
                        variant={filter === estado ? 'contained' : 'outlined'}
                        onClick={() => setFilter(estado)}
                    >
                        {estado}
                    </Button>
                ))}
            </Stack>

            {/* Lista filtrada */}
            <Grid container spacing={3}>
                {filteredProjects.map((p) => (
                    <Grid item key={p._id} xs={12} sm={6} md={4}>
                        <Card>
                            {p.imageUrl && (
                                <img
                                    src={`http://localhost:3001${p.imageUrl}`}
                                    alt={p.name}
                                    height="200"
                                    style={{ objectFit: 'cover', width: '100%' }}
                                />
                            )}
                            <CardContent>
                                <Typography variant="h6">{p.name}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {p.description}
                                </Typography>
                                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                                    Estado: {p.status}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Dashboard;
