const DashboardDefault = () => {
  return (
    <>
      <div className="font-mono">
        <h1 className="text-base">Главный</h1>
        <h4 className="mt-[20px] w-full">Административной панели для управления алгоритмами распознавания лиц в проекте.</h4>
        <h1 className="mt-[20px] w-full">
          Описание раздела в административной панели для управления доступом пользователей и разделением прав:
        </h1>
        <p className="mt-[20px] max-w-[970px]">
          В этом разделе администратор имеет полный контроль над управлением доступом пользователей. Здесь он может добавлять, удалять и
          изменять учетные записи пользователей, а также назначать им соответствующие разделы и права доступа. Администратор может создавать
          различные группы пользователей и назначать им определенные разделы, определять, какие функции и данные доступны для каждой группы.
          Также он может контролировать уровень доступа, например, определять, кто имеет право просматривать, редактировать или удалять
          данные. Этот раздел обеспечивает эффективное управление доступом к различным функциям и данным в системе, что позволяет сохранять
          безопасность и контролировать работу пользователей в проекте.
        </p>
      </div>
    </>
  );
};

export default DashboardDefault;
