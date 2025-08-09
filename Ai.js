import React from 'react';

function AiModel() {
  const modelInfo = {
    name: 'SmartVision AI Model',
    description: 'An advanced AI model specialized in detecting surface defects on leather seats with high precision.',
    input: 'High-resolution images or video frames',
    output: 'Labeled defect areas with bounding boxes',
    accuracy: '92.4%',
    framework: 'YOLOv8 - Ultralytics',
    language: 'Python + React Integration',
    dataset: 'Custom labeled dataset (2,000+ samples)',
    version: 'v1.3.2',
    lastUpdated: 'August 2025',
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>🧠 {modelInfo.name}</h1>
        <p style={styles.description}>{modelInfo.description}</p>

        <div style={styles.detailsSection}>
          <Detail label="Input Type" value={modelInfo.input} />
          <Detail label="Output Format" value={modelInfo.output} />
          <Detail label="Accuracy" value={modelInfo.accuracy} />
          <Detail label="Framework" value={modelInfo.framework} />
          <Detail label="Language" value={modelInfo.language} />
          <Detail label="Dataset" value={modelInfo.dataset} />
          <Detail label="Version" value={modelInfo.version} />
          <Detail label="Last Updated" value={modelInfo.lastUpdated} />
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div style={styles.detailItem}>
      <span style={styles.label}>{label}:</span>
      <span style={styles.value}>{value}</span>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    background: '#f5f8fc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    maxWidth: '700px',
    width: '100%',
    padding: '40px',
    fontFamily: 'Segoe UI, sans-serif',
  },
  title: {
    fontSize: '28px',
    color: '#1a237e',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '25px',
  },
  detailsSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'column',
    background: '#f0f4ff',
    padding: '15px',
    borderRadius: '10px',
  },
  label: {
    fontWeight: 'bold',
    color: '#37474f',
    fontSize: '14px',
    marginBottom: '5px',
  },
  value: {
    fontSize: '14px',
    color: '#000',
  },
};

export default AiModel;
