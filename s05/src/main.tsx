import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { TASKS } from './tasks/registry';

// Навигация через query-параметры и полную перезагрузку страницы:
// так на странице всегда стили только одного задания.
const params = new URLSearchParams(location.search);
const taskId = Number(params.get('task'));
const task = TASKS.find((t) => t.id === taskId);
const version = params.get('v') === 'solution' && task?.solution ? 'solution' : 'start';

const nav: React.CSSProperties = { fontFamily: 'system-ui, sans-serif', padding: 16, borderBottom: '1px solid #ddd' };

function Menu() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24, maxWidth: 720 }}>
      <h1>Подходы к стилизации — практика</h1>
      <ol>
        {TASKS.map((t) => (
          <li key={t.id} style={{ marginBottom: 8 }}>
            {t.title} — <a href={`?task=${t.id}`}>старт</a>
            {t.solution && (
              <>
                {' · '}
                <a href={`?task=${t.id}&v=solution`}>решение</a>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function TaskPage() {
  if (!task) return <Menu />;
  const Demo = (version === 'solution' && task.solution) || task.start;
  return (
    <>
      <div style={nav}>
        <a href="/">← все задания</a> · <b>Пр. {task.id}. {task.title}</b> ·{' '}
        {version === 'solution' ? (
          <a href={`?task=${task.id}`}>к стартовой версии</a>
        ) : (
          task.solution && <a href={`?task=${task.id}&v=solution`}>показать решение</a>
        )}
      </div>
      <Suspense fallback={<p style={{ padding: 16 }}>Загрузка…</p>}>
        <Demo />
      </Suspense>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskPage />
  </StrictMode>,
);
