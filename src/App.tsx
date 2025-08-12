import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AuthProvider } from './contexts/AuthContext';
import AuthGuard from './components/AuthGuard';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import JoinMovementPage from './pages/JoinMovementPage';
import VolunteerApplicationPage from './pages/VolunteerApplicationPage';
import PartnerSchoolPage from './pages/PartnerSchoolPage';
import DonatePage from './pages/DonatePage';
import SponsorInstrumentPage from './pages/SponsorInstrumentPage';
import StartChapterPage from './pages/StartChapterPage';
import AdminPage from './pages/AdminPage';

function AnimatedRoutes() {
  const location = useLocation();
  
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -20,
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <HomePage />
            </motion.div>
          } 
        />
        <Route 
          path="/team" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <TeamPage />
            </motion.div>
          } 
        />
        <Route 
          path="/join" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <JoinMovementPage />
            </motion.div>
          } 
        />
        <Route 
          path="/volunteer-application" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <VolunteerApplicationPage />
            </motion.div>
          } 
        />
        <Route 
          path="/partner-school" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <PartnerSchoolPage />
            </motion.div>
          } 
        />
        <Route 
          path="/donate" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <DonatePage />
            </motion.div>
          } 
        />
        <Route 
          path="/sponsor-instrument" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <SponsorInstrumentPage />
            </motion.div>
          } 
        />
        <Route 
          path="/start-chapter" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <StartChapterPage />
            </motion.div>
          } 
        />
        <Route 
          path="/admin" 
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <AdminPage />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AuthGuard>
          <AnimatedRoutes />
        </AuthGuard>
      </Router>
    </AuthProvider>
  );
}

export default App;