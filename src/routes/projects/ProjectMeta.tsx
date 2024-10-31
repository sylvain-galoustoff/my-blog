import style from "./projects.module.css";

type ProjectMetaProps = {
  label: string;
  values: string[] | string;
};

function ProjectMeta({ label, values }: ProjectMetaProps) {
  const renderValues = Array.isArray(values)
    ? values.map((value) => <p key={value}>{value}</p>)
    : undefined;

  return (
    <div className={style.meta}>
      <p className={style.label}>{label}</p>
      <div className={style.values}>{Array.isArray(values) ? renderValues : values}</div>
    </div>
  );
}

export default ProjectMeta;
