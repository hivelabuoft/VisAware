import React from "react";
import styles from "../styles/MappingOutput.module.css";

interface MappingItem {
  segmentNumber: number;
  description: string;
  label: string;
  rectangular: {
    xmin: number;
    ymin: number;
    xmax: number;
    ymax: number;
  };
  color: string;
}

interface MappingOutputProps {
  data: MappingItem[];
}

const MappingOutput: React.FC<MappingOutputProps> = ({ data }) => {
  return (
    <div className={styles.mappingOutputContainer}>
      {data.map((item) => (
        <div key={item.segmentNumber} className={styles.mappingCard}>
          <div
            className={styles.cardHeader}
            style={{ backgroundColor: item.color }}
          >
            <span className={styles.segmentNumber}>
              Segment {item.segmentNumber}
            </span>
          </div>
          <div className={styles.cardBody}>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.label}>
              <strong>Label:</strong> {item.label}
            </p>
            <p className={styles.coordinates}>
              <strong>Coordinates:</strong>
              <span> xmin: {item.rectangular.xmin},</span>
              <span> ymin: {item.rectangular.ymin},</span>
              <span> xmax: {item.rectangular.xmax},</span>
              <span> ymax: {item.rectangular.ymax}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MappingOutput;
